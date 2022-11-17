import 'express'
import { CustomerService } from './application/services/customer.service'
import { GetCustomerByIdUseCase } from './application/usecases/get-customer-by-id.usecase'
import { GenericCustomerRepository } from './infraestructure/repositories/customer/generic-customer.repository'
import { CustomerController } from './infraestructure/server/controllers/customer.controller'
import { Controllers, Server } from './infraestructure/server/server'
import { RedisClient } from './infraestructure/services/cache/redis-client.service'
import { RedisCacheService } from './infraestructure/services/cache/redis.service'

async function main() {
  // * init redis cache
  let redisCacheService
  try {
    const redisOptions: any = {} // * redis options
    const redisClient = new RedisClient(redisOptions)
    await redisClient.connect()
    redisCacheService = new RedisCacheService(redisClient)
  } catch (error) {
    console.log(`error al iniciar redis cache. ${error.message}`)
  }

  // * init repoitories
  const genericCustomerRepository = new GenericCustomerRepository()

  // * init use cases
  const getCustomerByIdUseCase = new GetCustomerByIdUseCase(genericCustomerRepository)

  // * init application services
  const getCustomerByIdService = new CustomerService(
    getCustomerByIdUseCase,
    redisCacheService
  )

  // * init controllers
  const customerController = new CustomerController(getCustomerByIdService)

  // * init server
  const controllers: Controllers = { customer: customerController }
  const server = new Server(controllers)
  server.listen(3000)
}

main()
