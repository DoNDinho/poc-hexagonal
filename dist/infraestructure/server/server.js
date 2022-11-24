"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
class Server {
    app;
    constructor(controllers) {
        this.app = (0, express_1.default)();
        this.app.get('/customers/:id', (req, res) => controllers.customer.getById(req, res));
    }
    listen(port) {
        this.app.listen(port, () => {
            console.log(`Server en port ${port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map