"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("express");
const customer_service_1 = require("./application/services/customer.service");
const get_customer_by_id_usecase_1 = require("./application/usecases/get-customer-by-id.usecase");
const generic_customer_repository_1 = require("./infraestructure/repositories/customer/generic-customer.repository");
const customer_controller_1 = require("./infraestructure/server/controllers/customer.controller");
const server_1 = require("./infraestructure/server/server");
const redis_client_service_1 = require("./infraestructure/services/cache/redis-client.service");
const redis_service_1 = require("./infraestructure/services/cache/redis.service");
async function main() {
    // * init redis cache
    let redisCacheService;
    try {
        const redisOptions = {}; // * redis options
        const redisClient = new redis_client_service_1.RedisClient(redisOptions);
        await redisClient.connect();
        redisCacheService = new redis_service_1.RedisCacheService(redisClient);
    }
    catch (error) {
        console.log(`error al iniciar redis cache. ${error.message}`);
    }
    // * init repoitories
    const genericCustomerRepository = new generic_customer_repository_1.GenericCustomerRepository();
    // * init use cases
    const getCustomerByIdUseCase = new get_customer_by_id_usecase_1.GetCustomerByIdUseCase(genericCustomerRepository);
    // * init application services
    const getCustomerByIdService = new customer_service_1.CustomerService(getCustomerByIdUseCase, redisCacheService);
    // * init controllers
    const customerController = new customer_controller_1.CustomerController(getCustomerByIdService);
    // * init server
    const controllers = { customer: customerController };
    const server = new server_1.Server(controllers);
    server.listen(3000);
}
main();
//# sourceMappingURL=index.js.map