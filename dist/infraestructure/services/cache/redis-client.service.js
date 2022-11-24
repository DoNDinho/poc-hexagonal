"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisClient = void 0;
const redis_1 = require("redis");
class RedisClient {
    client;
    constructor(options) {
        this.client = (0, redis_1.createClient)(options);
    }
    async connect() {
        await this.client.connect();
    }
    getClient() {
        return this.client;
    }
}
exports.RedisClient = RedisClient;
//# sourceMappingURL=redis-client.service.js.map