import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stack = [];
let top = -1;

const stack_fun = () => {
  rl.question('Enter 1 to push, 2 to pop, 3 to Display, 4 to Exit: ', (user_input) => {
    if (user_input === '1')
         {
      rl.question('Enter value to push: ', (value) => 
                {
        top++;
        stack[top] = value;
        console.log(`Pushed ${value} to stack. Current stack: [${stack}]`);
        stack_fun();
                });
        } 
    else if (user_input === '2') 
        {
      if (top === -1) 
        {
        console.log('Stack is empty. Nothing to pop.');
        display();
        stack_fun();
        } 
      else
       {
        const poppedValue = stack[top];
        stack.pop();
        top--;
        console.log(`Popped ${poppedValue} from stack. Current stack: [${stack}]`);
        display();
        stack_fun();
      }
    } 
    else if (user_input === '3') 
        {
      display();
      stack_fun();
    } 
    else if (user_input === '4')
         {
      console.log('Exiting...');
      rl.close();
         } 
    else
     {
      console.log('Invalid input. Please enter 1, 2, 3, or 4.');
      stack_fun();
    }
  });
};

const display = () => {
  console.log('Elements in the stack are:');
  for (let i of stack) {
    console.log(i);
  }
};
stack_fun();
