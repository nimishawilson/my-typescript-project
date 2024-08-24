import { ExampleService } from './complex';
import { Person } from './person';

const exampleService = new ExampleService();
const num = 20;
exampleService.complexFunction(num);

const john = new Person('John Doe');
(john as any).greet();
