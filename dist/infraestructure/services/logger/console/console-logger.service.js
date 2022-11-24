"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLoggerService = void 0;
class ConsoleLoggerService {
    constructor() { }
    error(message, detail) {
        console.error(message, detail);
    }
    info(message, detail) {
        console.info(message, detail);
    }
    debug(message, detail) {
        console.debug(message, detail);
    }
}
exports.ConsoleLoggerService = ConsoleLoggerService;
//# sourceMappingURL=console-logger.service.js.map