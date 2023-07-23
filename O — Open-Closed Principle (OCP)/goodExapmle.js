class Shape {
    getArea() {
      // Abstract method for calculating the area of a shape.
      // This method should be overridden in concrete shape classes.
      throw new Error('Method not implemented.');
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Square extends Shape {
    constructor(sideLength) {
      super();
      this.sideLength = sideLength;
    }
  
    getArea() {
      return this.sideLength * this.sideLength;
    }
  }
  
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    getArea() {
      return (this.base * this.height) / 2;
    }
  }
  
  class ShapeAreaCalculator {
    constructor(shapes) {
      this.shapes = shapes;
    }
  
    getTotalArea() {
      let totalArea = 0;
  
      for (const shape of this.shapes) {
        totalArea += shape.getArea();
      }
  
      return totalArea;
    }
  }
  
  // Usage of the good example:
  const circle = new Circle(5);
  const square = new Square(6);
  const triangle = new Triangle(4, 3);
  
  const shapes = [circle, square, triangle];
  const shapeAreaCalculator = new ShapeAreaCalculator(shapes);
  
  console.log(`Total area of shapes: ${shapeAreaCalculator.getTotalArea().toFixed(2)}`);
  