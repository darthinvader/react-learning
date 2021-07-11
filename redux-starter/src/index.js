function greet(fn) {
  console.log(fn());
}

function sayHello() {
  return function () {
    return "Hello World";
  };
}
