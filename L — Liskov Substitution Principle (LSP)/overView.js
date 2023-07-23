// Explanation of the Bad Example ===> Violating Liskov Substitution Principle:
// In the bad example, we have a Rectangle class with setWidth and setHeight methods that change the width and height independently. 
// Then, we have a Square class that extends Rectangle. 
// The Square class overrides the setWidth and setHeight methods to ensure the square always has equal side lengths.

// However, by doing this, we violate the Liskov Substitution Principle. 
// The behavior of the Square class doesn't preserve the behavior of its superclass Rectangle. 
// When we use the Square class as if it were a Rectangle, it changes both the width and height simultaneously,
//  causing unexpected behavior. In the printArea function, 
// we encounter incorrect output when calculating the area for a square because the behavior of the Square class is not substitutable for a Rectangle.

// Explanation of the Good Example ==> Adhering to Liskov Substitution Principle:
// In the good example, we separate the Rectangle and Square classes. 
// The Square class no longer extends Rectangle, ensuring that there is no implicit relationship between the two. 
// Instead, both classes have independent implementations of getArea() and do not override each other's methods.

// By using composition, we adhere to the Liskov Substitution Principle.
//  Now, when we use the printArea function with either a Rectangle or a Square, 
// the behavior is consistent, and we get the correct output for both shapes. 
// The Square class can be used interchangeably with the Rectangle class without affecting the correctness of the program, 
// fulfilling the requirements of the Liskov Substitution Principle.
