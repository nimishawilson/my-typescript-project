export function AddGreetMethod<T extends { new (...args: any[]): {} }>(constructor: T) {
    // Modify the class prototype to add a new method
    constructor.prototype.greet = function() {
      console.log(`Hello, my name is ${this.name}`);
    };
  }
  