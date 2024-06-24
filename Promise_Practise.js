function add(num1,num2)
{
return new Promise((resolve,reject)=>
{
    if(typeof num1=='number' && typeof num2=='number')
        resolve(num1+num2)
    else
    reject("Type Error")
})
}
add(20,30).then((result)=>{
    console.log("Successfully Resolved and Result :",result)
}
)
.catch((error)=>
{
    console.log("Oops! ",error)
})