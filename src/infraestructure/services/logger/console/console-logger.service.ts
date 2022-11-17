import { Logger } from "../../../../domain/services/logger/logger.service";

export class ConsoleLoggerService implements Logger {
  constructor() {}

  error(message: string, detail?: any): void {
    console.error(message, detail)
  }
  
  info(message: string, detail?: any): void {
    console.info(message, detail)
  }

  debug(message: string, detail?: any): void {
    console.debug(message, detail)
  }

}