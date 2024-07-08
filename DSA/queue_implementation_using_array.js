import readline from 'readline'
const rl=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
)
//In this program,we will implement Queue Data Structure which in which insertion is done from one first_element and
//deletion from the other.
//Queue follows FIFO which means First In First Out
let queue = [];
let qu = -1;
let first_element = 0 //fixed

let stack_fun = () => {
  rl.question("Enter 1 to add an element in the queue, 2 to delete, 3 to display, and 4 to exit: ", (input) => {
    if (input === '1') {
      rl.question("Enter the number to add: ", (num) => {
        qu++;
        queue[qu] = num;
        console.log(`${num} added in the Queue. Current Queue: [${queue}]`);
        stack_fun();
      });
    } 
    else if (input === '2') 
        {
          if (queue.length === 0)
            console.log("Queue is empty. Nothing to delete.")
          else
     {
        console.log(`Deleted ${queue[first_element]} from the Queue.`);
        queue = queue.slice(first_element + 1); //queue.slice(1) will delete the first element
        qu--
        console.log(`Current Queue: [${queue}]`);
      }
      stack_fun();
    } 
    else if (input === '3')
         {
      console.log('Elements in the Queue are:');
      for (let i of queue) {
        console.log(i);
      }
      stack_fun();
    } 
    else if (input === '4') {
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

stack_fun();
