/*
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 30;
let isStudent = true;
let fare = 800;

if (age < 10) {
    console.log ("Children are free");
}

else if (age >= 60) {
    // 15% discount
    let discount = fare * (15 / 100);
    fare = fare - discount;
    console.log ("Your Fare is: "+ fare);
}
else if (isStudent) {
    // 50% discount
    let discount = fare * (50 / 100);
    fare = fare - discount;
    console.log ("Your Fare is: "+ fare);
}
else {
    console.log ("Your Fare is: "+ fare);   
}
