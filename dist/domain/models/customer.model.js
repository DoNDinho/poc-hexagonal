"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    name;
    height;
    mass;
    eye_color;
    birth_year;
    constructor(customer) {
        this.name = customer.name;
        this.height = customer.height;
        this.mass = customer.mass;
        this.eye_color = customer.eye_color;
        this.birth_year = customer.birth_year;
    }
    getState() {
        const { name, height, mass, eye_color, birth_year } = this;
        const state = { name, height, mass, eye_color, birth_year };
        return state;
    }
}
exports.Customer = Customer;
//# sourceMappingURL=customer.model.js.map