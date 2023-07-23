class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    setWidth(width) {
      this.width = width;
    }
  
    setHeight(height) {
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
  }
  
  class Square extends Rectangle {
    constructor(sideLength) {
      super(sideLength, sideLength);
    }
  
    // Violates LSP: Setting side length for Square should maintain the square's properties,
    // but this method changes both width and height, causing unexpected behavior.
    setWidth(width) {
      this.width = width;
      this.height = width;
    }
  
    // Violates LSP: Setting side length for Square should maintain the square's properties,
    // but this method changes both width and height, causing unexpected behavior.
    setHeight(height) {
      this.width = height;
      this.height = height;
    }
  }
  
  // Usage of the bad example:
  function printArea(rectangle) {
    rectangle.setWidth(4);
    rectangle.setHeight(5);
    console.log(`Area: ${rectangle.getArea()}`);
  }
  
  const rectangle = new Rectangle(0, 0);
  const square = new Square(0);
  
  printArea(rectangle); // Output: Area: 20 (4 * 5)
  printArea(square); // Unexpected Output: Area: 25 (5 * 5)
  