{
  // Javascript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // Typescript
  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  // Javscript
  function jsFetch(id) {
    // code ..
    // code ..
    // code ..
    return new Promise((resolve, reject) => {
      resolve(1);
    });
  }

  // Typescript
  function tsFetch(id: string): Promise<number> {
    // code ..
    // code ..
    // code ..
    return new Promise((resolve, reject) => {
      resolve(1);
    });
  }

  // Javascript => Typescript

  // Optional Parameter
  function printInfo(name: string, age?: number) {
    console.log(name);
    console.log(age);
  }

  // Default Parameter
  function printMessage(message: string = "This is a default message!") {
    console.log(message);
  }

  // Rest Parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
}
