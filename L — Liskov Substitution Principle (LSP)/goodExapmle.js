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
  
  class Square {
    constructor(sideLength) {
      this.sideLength = sideLength;
    }
  
    setSideLength(sideLength) {
      this.sideLength = sideLength;
    }
  
    getArea() {
      return this.sideLength * this.sideLength;
    }
  }
  
  // Usage of the good example:
  function printArea(shape) {
    shape.setSideLength(4);
    console.log(`Area: ${shape.getArea()}`);
  }
  
  const rectangle = new Rectangle(0, 0);
  const square = new Square(0);
  
  printArea(rectangle); // Output: Area: 16 (4 * 4)
  printArea(square); // Output: Area: 16 (4 * 4)
  