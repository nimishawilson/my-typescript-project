export function LogTime(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
      const startTime = Date.now();
      console.log(`Start time for ${propertyKey}: ${new Date(startTime).toISOString()}`);
  
      const result = originalMethod.apply(this, args);
  
      const endTime = Date.now();
      console.log(`End time for ${propertyKey}: ${new Date(endTime).toISOString()}`);
      console.log(`Time taken by ${propertyKey}: ${endTime - startTime} milliseconds`);
  
      return result;
    };
  
    return descriptor;
  }
  