$(document).ready(function() {
  $('body').append('<div>Hello</div>');

  let stackArr = [];
  for (let i = 0; i < 250000; i++) {
    let stack = new Stack();
    stackArr.push(stack);
  }

  let queueArr = [];
  for (let i = 0; i < 250000; i++) {
    let queue = new Queue();
    queueArr.push(queue);
  }

  console.log(stackArr);

  console.log(queueArr);



  //queque

  //functional
  //functional-shared
  //prototypal
  //pseudoclassical
  //es6



  //stack

  //functional
  //functional-shared
  //prototypal
  //pseudo-classical
  //ES6





});