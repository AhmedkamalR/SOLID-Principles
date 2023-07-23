// Explanation of the Bad Example ==> Violating Dependency Inversion Principle:
// In the bad example, the Logger class directly creates an instance of ConsoleLoggerService, 
// a specific logger implementation. This tightly couples the high-level module (Logger)
//  to a low-level module (ConsoleLoggerService).

// By violating the Dependency Inversion Principle, 
// the Logger class cannot be easily extended or modified to use a different logging implementation.
// If we want to change the logging behavior or introduce a new logging mechanism, 
// we have to modify the Logger class itself, 
// which leads to code modification and potential issues in the future.

// Explanation of the Good Example ==> Adhering to Dependency Inversion Principle:
// In this good example, we create an abstraction called LoggerService
// , which defines the contract for logging messages. We then provide two concrete implementations,
// FileLoggerService and ConsoleLoggerService, each responsible 
// for logging messages to a file and the console, respectively.

// The Logger class represents a high-level module and depends on the LoggerService abstraction.
//  By using dependency injection, we inject the specific 
// LoggerService implementation into the Logger class during its construction.

// As a result, the Logger class is decoupled from the specific logging implementations.
//  It can now log messages to a file or 
// the console without knowing the internal details of the logger classes.
//  This adherence to the Dependency Inversion Principle promotes a flexible and maintainable design,
//  making it easy to extend the application with new logging methods in the future.