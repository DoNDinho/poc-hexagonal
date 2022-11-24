"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCustomerByIdUseCase = void 0;
const customer_model_1 = require("../../domain/models/customer.model");
class GetCustomerByIdUseCase {
    customerRepository;
    constructor(customerRepository) {
        if (!customerRepository)
            throw new Error('customerRepository es requerido');
        this.customerRepository = customerRepository;
    }
    async execute(id) {
        const customerDto = await this.customerRepository.getById(id);
        return new customer_model_1.Customer(customerDto);
    }
}
exports.GetCustomerByIdUseCase = GetCustomerByIdUseCase;
//# sourceMappingURL=get-customer-by-id.usecase.js.map