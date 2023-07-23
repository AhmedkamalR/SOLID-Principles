// Interface for Printer
class Printer {
    print() {
      console.log("Printing...");
    }
  }
  
  // Interface for Scanner
  class Scanner {
    scan() {
      console.log("Scanning...");
    }
  }
  
  // SimplePrinter implements Printer interface
  class SimplePrinter extends Printer {}
  
  // AllInOnePrinter implements both Printer and Scanner interfaces
  class AllInOnePrinter extends Printer {
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
  