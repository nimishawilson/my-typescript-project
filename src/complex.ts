import { LogTime } from "./log-time.decorator";

const factorial = (n: number): number => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

class ExampleService {
  @LogTime // example of method decorator
  complexFunction(num: number): void {
    console.log(`Calculating factorial of ${num}...`);
    const result = factorial(num);
    console.log(`Factorial of ${num} is ${result}`);
  }
}

export { ExampleService };
