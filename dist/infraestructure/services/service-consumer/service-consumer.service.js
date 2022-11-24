"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceConsumer = void 0;
const axios_1 = __importDefault(require("axios"));
class ServiceConsumer {
    static async get(data) {
        const { url, headers } = data;
        const config = { headers };
        const func = async () => await axios_1.default.get(url, config);
        return await ServiceConsumer.consume(func, data);
    }
    static async consume(func, data) {
        try {
            const initTime = new Date();
            const { data } = await func();
            const finishTime = new Date();
            console.log(`Tiempo de respuesta de API fue de ${finishTime.getTime() - initTime.getTime()} ms`);
            return data;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.ServiceConsumer = ServiceConsumer;
//# sourceMappingURL=service-consumer.service.js.map