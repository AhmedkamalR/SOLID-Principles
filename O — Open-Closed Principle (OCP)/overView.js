// Bad Example: Violating Open/Closed Principle

// Question: What's the problem with the bad example?
// Answer: The bad example violates the Open/Closed Principle 
// because whenever we want to add a new shape, 
// we have to modify the existing ShapeAreaCalculator class. 
// This makes the class open for modification, 
// leading to potential issues and making the code less maintainable.

// Good Example: Adhering to Open/Closed Principle

// Question: How does the good example address the problem?
// Answer: The good example adheres to the Open/Closed Principle by introducing an abstract Shape class 
// and extending it for each specific shape (Circle, Square, Triangle). Now, 
// we can add new shapes without modifying the existing ShapeAreaCalculator class. 
// It remains closed for modification and open for extension.

// Question: What are the benefits of the good example?
// Answer: The good example offers several benefits:
// 1-Easy to add new shapes: Adding a new shape is as simple as extending the Shape class and implementing the getArea() method for the new shape. No need to modify existing code.
// 2-Improved maintainability: The code is more organized and modular, reducing the risk of introducing bugs when new shapes are added.
// 3-Code reusability: The Shape class can be reused for other purposes, and each shape class only focuses on its specific behavior.
// 4-Encourages good design: Using abstract classes and inheritance promotes good object-oriented design practices.

// Question: How does the good example affect the ShapeAreaCalculator usage?
// Answer: In the good example, the usage of ShapeAreaCalculator remains unchanged. 
// We can pass an array of any shapes (including new shapes) to the calculator, 
// and it will calculate the total area of all the shapes correctly 
// without any modifications to the calculator itself.

// In summary, 
// the good example demonstrates a more flexible and maintainable design, 
// following the principles of object-oriented programming. 
// It allows for easy extension with new shapes while avoiding the need to modify existing classes, 
// promoting code reusability and reducing potential risks.