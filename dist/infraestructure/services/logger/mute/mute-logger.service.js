"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuteLoggerService = void 0;
class MuteLoggerService {
    error(message, detail) {
        this.mute();
    }
    info(message, detail) {
        this.mute();
    }
    debug(message, detail) {
        this.mute();
    }
    mute() { }
}
exports.MuteLoggerService = MuteLoggerService;
//# sourceMappingURL=mute-logger.service.js.map