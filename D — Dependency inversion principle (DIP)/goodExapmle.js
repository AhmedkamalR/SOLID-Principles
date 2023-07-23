// Abstraction for LoggerService
class LoggerService {
    log(message) {
      // Abstract method for logging messages.
      // This method should be overridden in concrete logger classes.
      throw new Error('Method not implemented.');
    }
  }
  
  // Concrete implementation of LoggerService for logging messages to a file.
  class FileLoggerService extends LoggerService {
    log(message) {
      // Code for logging messages to a file.
      console.log(`Logging to file: ${message}`);
    }
  }
  
  // Concrete implementation of LoggerService for logging messages to the console.
  class ConsoleLoggerService extends LoggerService {
    log(message) {
      // Code for logging messages to the console.
      console.log(`Logging to console: ${message}`);
    }
  }
  
  // High-level module using dependency injection
  class Logger {
    constructor(loggerService) {
      this.loggerService = loggerService;
    }
  
    logMessage(message) {
      // Log the message using the injected logger service.
      this.loggerService.log(message);
    }
  }
  
  // Usage of the good example:
  const fileLoggerService = new FileLoggerService();
  const consoleLoggerService = new ConsoleLoggerService();
  
  const fileLogger = new Logger(fileLoggerService);
  const consoleLogger = new Logger(consoleLoggerService);
  
  fileLogger.logMessage("This message is logged to a file.");
  consoleLogger.logMessage("This message is logged to the console.");
  