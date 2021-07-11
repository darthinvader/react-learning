function sayHello() {
  return () => {
    return "Hello Worlds";
  };
}

let fn = sayHello();
let message = fn();
