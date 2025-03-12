class queue {
    constructor() {
      this.items = []; 
    }
  
    // Push operation
    enqueue (element) {
      this.items.push(element);
    }
  
    // Pop operation
    dequeue() {
      if (this.isEmpty()) {
        return "Stack is empty"; 
      }
      return this.items.pop(0);
    }
  
    // Peek operation
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty"; 
      }
      return this.items[this.items[0]];
    }
  
    // isEmpty operation
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Size operation
    size() {
      return this.items.length;
    }
  
    // Print the stack 
    print() {
      console.log(this.items);
    }
  }
  
  // Example Usage
  const stack = new queue();
  
  stack.enqueue(10)
  stack.enqueue(20)
  console.log(stack.peek())
  stack.dequeue()
  stack.print();
  