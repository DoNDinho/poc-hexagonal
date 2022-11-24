"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisCacheService = void 0;
class RedisCacheService {
    client;
    constructor(client) {
        this.client = client.getClient();
    }
    async get(key) {
        try {
            const data = await this.client.get(key);
            if (data)
                return JSON.parse(data);
            return null;
        }
        catch (error) {
            return null;
        }
    }
    async set(key, value, options) {
        try {
            await this.client.set(key, value, options);
        }
        catch (error) { }
    }
}
exports.RedisCacheService = RedisCacheService;
//# sourceMappingURL=redis.service.js.map