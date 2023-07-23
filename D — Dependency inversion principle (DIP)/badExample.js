// Concrete implementation of LoggerService for logging messages directly to the console.
class ConsoleLoggerService {
    log(message) {
      // Code for logging messages to the console.
      console.log(`Logging to console: ${message}`);
    }
  }
  
  // High-level module tightly coupled to a specific logger implementation
  class Logger {
    constructor() {
      this.loggerService = new ConsoleLoggerService();
    }
  
    logMessage(message) {
      // Log the message using the specific console logger service.
      this.loggerService.log(message);
    }
  }
  
  // Usage of the bad example:
  const logger = new Logger();
  logger.logMessage("This message is logged to the console.");
  