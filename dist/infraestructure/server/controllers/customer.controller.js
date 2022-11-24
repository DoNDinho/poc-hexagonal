"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
class CustomerController {
    getCustomerByIdService;
    constructor(getCustomerByIdService) {
        if (!getCustomerByIdService)
            throw new Error('getCustomerByIdService es requerido');
        this.getCustomerByIdService = getCustomerByIdService;
    }
    async getById(req, res) {
        const customerResponse = await this.getCustomerByIdService.getById(req.params.id);
        return res.json(customerResponse);
    }
}
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.controller.js.map