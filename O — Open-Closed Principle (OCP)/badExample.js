class ShapeAreaCalculator {
    constructor(shapes) {
      this.shapes = shapes;
    }
  
    getTotalArea() {
      let totalArea = 0;
  
      for (const shape of this.shapes) {
        if (shape.type === 'circle') {
          totalArea += Math.PI * shape.radius * shape.radius;
        } else if (shape.type === 'square') {
          totalArea += shape.sideLength * shape.sideLength;
        } else if (shape.type === 'triangle') {
          totalArea += (shape.base * shape.height) / 2;
        }
        // If a new shape is introduced, we need to modify this class, violating the OCP.
      }
  
      return totalArea;
    }
  }
  
  // Usage of the bad example:
  const circle = { type: 'circle', radius: 5 };
  const square = { type: 'square', sideLength: 6 };
  const triangle = { type: 'triangle', base: 4, height: 3 };
  
  const shapes = [circle, square, triangle];
  const shapeAreaCalculator = new ShapeAreaCalculator(shapes);
  
  console.log(`Total area of shapes: ${shapeAreaCalculator.getTotalArea().toFixed(2)}`);
  