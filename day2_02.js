const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
}); // learn this syntax 
function sum(a,b)
{
    console.log("Sum of "+a+" and " +b+" is "+(a+b));
}
rl.question("Enter number 1:",(num1) => {
    rl.question("Enter number 2:",(num2) =>
    {
        const a=parseInt(num1)
        const b=parseInt(num2)
        sum(a,b)
        rl.close()
    })

})