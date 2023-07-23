// Explanation of the Bad Example ==> Violating Interface Segregation Principle:
// In the bad example, the Printer interface includes both print() and scan() methods.
// The SimplePrinter class implements this interface but throws an error in the scan() method 
// because it doesn't support scanning. 
// This violates the Interface Segregation Principle 
// because the SimplePrinter class is forced to implement a method it doesn't use.

// Explanation of the Good Example ==> Adhering to Interface Segregation Principle:
// In the good example, we have two separate interfaces: Printer and Scanner. 
// The SimplePrinter class implements only the Printer interface, 
// and the AllInOnePrinter class implements both the Printer and Scanner interfaces.

// By segregating the interfaces, we adhere to the Interface Segregation Principle. 
// The SimplePrinter class is not forced to implement the scan() method, 
// and it only implements what's relevant for its functionality. Similarly, 
// the AllInOnePrinter class implements both interfaces because it supports both printing and scanning.

// Using smaller and more focused interfaces improves the design 
// and maintainability of our codebase.
// Classes are now only required to implement the methods they need, 
// leading to cleaner and more extensible code.

