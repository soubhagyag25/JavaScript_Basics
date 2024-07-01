try{
    console.log("Suspicious code")
    // const result=prompt("Are you a robot?")
    const result='y'
    if(result=='y' || result=='Y')
        throw new Error("Robot found")
}
catch(error)
{
    console.log("Error Occurred because",error)
}
finally{
console.log("I am a Finally block and I am executed definitely")
}