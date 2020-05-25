class Stack {
  constructor() {
    this.storage = [];
  }

  push(item) {
    this.storage.push(item);
  }

  pop() {
    return this.storage.pop();
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  printContents() {
    this.storage.forEach((elem) => console.log(elem));
  }
}

function sortStack(input) {
  // we have 2 stacks

  let output = new Stack();

  while (!input.isEmpty()) {
    let temp = input.pop();

    while (!output.isEmpty() && output.peek() > temp) {
      input.push(output.pop());
    }
    output.push(temp);
  }

  return output;

  // take the item off the top of the first stack
  // compare item to peeked at second stack
  // if second stack top is smaller, put temp onto the second stack?
  // if top of second stack is larger than temp
  //
  // we now have a new item in the middle
  // compare it to the top of the first stack
  // compare and switch?
}

const s = new Stack();
s.push(4);
s.push(10);
s.push(8);
s.push(5);
s.push(1);
s.push(6);
