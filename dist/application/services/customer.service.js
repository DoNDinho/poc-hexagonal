"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
class CustomerService {
    getCustomerByIdUseCase;
    cacheService;
    constructor(getCustomerByIdUseCase, cacheService) {
        if (!getCustomerByIdUseCase)
            throw new Error('getCustomerByIdUseCase es requerido');
        this.getCustomerByIdUseCase = getCustomerByIdUseCase;
        this.cacheService = cacheService;
    }
    async getById(id) {
        const customerCache = await this.cacheService?.get(id);
        if (customerCache)
            return customerCache;
        const customer = await this.getCustomerByIdUseCase.execute(id);
        const customerResponse = this.responseFormat(customer);
        await this.cacheService?.set(id, JSON.stringify(customerResponse));
        return customerResponse;
    }
    responseFormat(customer) {
        const customerResponse = {
            customer: customer.getState()
        };
        return customerResponse;
    }
}
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map