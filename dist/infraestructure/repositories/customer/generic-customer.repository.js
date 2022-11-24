"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericCustomerRepository = void 0;
const service_consumer_service_1 = require("../../services/service-consumer/service-consumer.service");
class GenericCustomerRepository {
    async getById(id) {
        try {
            const url = `https://swapi.dev/api/people/${id}`;
            const headers = { 'Content-Type': 'application/json' };
            const response = await service_consumer_service_1.ServiceConsumer.get({ url, headers });
            return response;
        }
        catch (error) {
            const message = `error en repositorio generico de customer: ${error.message}`;
            throw message;
        }
    }
}
exports.GenericCustomerRepository = GenericCustomerRepository;
//# sourceMappingURL=generic-customer.repository.js.map