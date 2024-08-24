# Typescript Decorators

build the application
`npm run build`

run the application
`npm start`


***

In TypeScript, decorators are functions that allow you to modify or extend the behavior of classes, methods, accessors, properties, or parameters. The parameters passed to a decorator function depend on what is being decorated (e.g., a class, a method, a property, etc.).

## 1. Class Decorators

Class decorators are applied to a class declaration. The decorator function takes a single parameter.

#### Parameter:
<ul>
  <li>target: The constructor of the class being decorated.</li>
</ul>

example:

```
function MyClassDecorator(target: Function) {
  console.log('Class decorator called on:', target);
}

@MyClassDecorator
class MyClass {
  // Class implementation
}
```

## 2. Method Decorators
Method decorators are applied to methods within a class. The decorator function takes three parameters.

#### Parameter:
<ul>
  <li>target: The prototype of the class for instance methods, or the constructor for static methods.</li>
  <li> propertyKey: The name of the method being decorated. </li>
   <li> descriptor: The property descriptor for the method. </li>
</ul>

example:
```
function MyMethodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('Method decorator called on:', target, propertyKey, descriptor);
}

class MyClass {
  @MyMethodDecorator
  myMethod() {
    // Method implementation
  }
}

```

## 3. Accessor Decorators (Getter/Setter)
Accessor decorators are applied to getters or setters. The decorator function takes the same three parameters as method decorators.

#### Parameter:
<ul> 
<li> target: The prototype of the class for instance accessors, or the constructor for static accessors. </li>
<li> propertyKey: The name of the accessor (getter or setter) being decorated.
 </li>
<li> descriptor: The property descriptor for the accessor.
 </li>
</ul>

example:
```
function MyAccessorDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator called on:', target, propertyKey, descriptor);
}

class MyClass {
  private _value: number = 0;

  @MyAccessorDecorator
  get value() {
    return this._value;
  }

  @MyAccessorDecorator
  set value(newValue: number) {
    this._value = newValue;
  }
}

```

## 4. Property Decorators
Property decorators are applied to properties within a class. The decorator function takes two parameters.

#### Parameter:
<ul>
<li> target: The prototype of the class for instance properties, or the constructor for static properties. </li>
<li> propertyKey: The name of the property being decorated. </li>
</ul>

Note: Property decorators do not receive a property descriptor.

example:
```
function MyPropertyDecorator(target: any, propertyKey: string) {
  console.log('Property decorator called on:', target, propertyKey);
}

class MyClass {
  @MyPropertyDecorator
  myProperty: string = 'Hello';
}
```

## 5. Parameter Decorators
Parameter decorators are applied to method parameters. The decorator function takes three parameters.

#### Parameter:
<ul> 
<li> target: The prototype of the class for instance methods, or the constructor for static methods. </li>
<li> propertyKey: The name of the method whose parameter is being decorated. </li>
<li> parameterIndex: The index of the parameter in the function's parameter list. </li>
</ul>

example:

```
function MyParameterDecorator(target: any, propertyKey: string, parameterIndex: number) {
  console.log('Parameter decorator called on:', target, propertyKey, parameterIndex);
}

class MyClass {
  myMethod(@MyParameterDecorator param1: string) {
    // Method implementation
  }
}

```




***

| types of decorators    | parameters |
| ---------------------- | ------- |
| Class Decorator: | (target: Function)   |
| Method Decorator: | (target: any, propertyKey: string, descriptor: PropertyDescriptor)     |
| Accessor Decorator:    | (target: any, propertyKey: string, descriptor: PropertyDescriptor)    |
| Property Decorator: | (target: any, propertyKey: string) |
| Parameter Decorator: | (target: any, propertyKey: string, parameterIndex: number) |
