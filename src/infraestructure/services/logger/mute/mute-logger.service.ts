import { Logger } from "../../../../domain/services/logger/logger.service";

export class MuteLoggerService implements Logger {
  error(message: string, detail?: any): void {
    this.mute()
  }
  info(message: string, detail?: any): void {
    this.mute()
  }
  debug(message: string, detail?: any): void {
    this.mute()
  }

  private mute() {}

}