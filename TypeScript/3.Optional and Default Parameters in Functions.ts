function Employee(name:string,company:string="Unico Connect Pvt Ltd")//Default Parameter.
{
console.log(`Hello ${name}.You are a valuable employee of our company ${company}`);
}
Employee("Soubhagya");//Here I am passing only one argument but still the function is working properly.
//Optional Parameters are suffixed with ?
//ex:
function Hotel(customerName:string,TableNo:number,customerReview?:string,customerRatings?:number)
{
    console.log(`Hi ${customerName}. Your Table Number is ${TableNo}`);
    if (customerRatings !== undefined) {
        console.log("Your Ratings:", customerRatings);
    }
    if (customerReview !== undefined) {
        console.log("Your Review:", customerReview);
    }
}
Hotel("Soubhagya",21,"Nice Hotel and hygienic",5)
Hotel("Rahul",25,);