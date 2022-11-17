import { CustomerDto } from '../../../domain/dto/customer.dto'
import { CustomerRepository } from '../../../domain/repositories/customer.repository'
import { ServiceConsumer } from '../../services/service-consumer/service-consumer.service'

export class GenericCustomerRepository implements CustomerRepository {
  public async getById(id: string): Promise<CustomerDto> {
    try {
      const url = `https://swapi.dev/api/people/${id}`
      const headers = { 'Content-Type': 'application/json' }
      const response = await ServiceConsumer.get<CustomerDto>({ url, headers })
      return response
    } catch (error) {
      const message = `error en repositorio generico de customer: ${error.message}`
      throw message
    }
  }
}
