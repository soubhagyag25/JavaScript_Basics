let class1={
    Alok:99,
    Sahil:95,
    Chandru:96,
    Soubhagya:93,
    Vivek:78
}
function forloop()//little complex
{
for (let i=0;i<Object.keys(class1).length;i++)
    {
        console.log("The Marks of "+Object.keys(class1)[i]+" are "+class1[Object.keys(class1)[i]])
    }
}
function forinloop()//easier
{
    for (let i in class1){
    console.log(" Marks of " +i+ " are "+class1[i])
    }
}
forloop();
forinloop();