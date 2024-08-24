import { AddGreetMethod } from "./greet.decorator";


@AddGreetMethod // example of class decorator
export class Person {
  constructor(public name: string) {}
}