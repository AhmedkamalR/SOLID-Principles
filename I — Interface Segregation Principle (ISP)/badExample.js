// Bad Example
class SimplePrinter {
    print() {
      console.log("Printing...");
    }
    // Violates ISP: The SimplePrinter doesn't need the scan method,
    // but it is forced to implement it because of the Printer interface.
    scan() {
      throw new Error("Scan not supported by SimplePrinter.");
    }
  }
  
  class AllInOnePrinter {
    print() {
      console.log("Printing...");
    }
    scan() {
      console.log("Scanning...");
    }
  }
  
  function printDocuments(printer) {
    printer.print();
  }
  
  const simplePrinter = new SimplePrinter();
  const allInOnePrinter = new AllInOnePrinter();
  
  printDocuments(simplePrinter);
  printDocuments(allInOnePrinter);
  