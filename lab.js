/* The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.*/

/*
Part One:
For example, consider the following problem:
We have four numbers that need to add up to 50. At least two of these numbers must be odd. No number can be larger than 25, and each number must be unique.
How can we verify this? Check out the following CodeSandbox for an example. You can change the values of each of the initial numbers, n1 through n4, to see how the code responds in the console.

*/
//****************************************************************************************************************************************************************************** */


const num1 = 13;
const num2 = 12;
const num3 = 15;
const num4 = 10;

const sumOfNums = console.log(num1 + num2 + num3 + num4);

// Checking for number 1 to see if it is divisible by 5

if(num1 % 5 ===0){
    console.log("number = " + num1 + " is divisible bye 5");
}
else {
    console.log("number "+ num1 + " is not divisible by 5");
}

// Checking for number 2 to see if it is divisible by 5

if(num2 % 5 ===0){
    console.log("number = " + num2 + " is divisible bye 5");
}
else {
    console.log("number "+ num2 + " is not divisible by 5");
}

// Checking for number 3 to see if it is divisible by 5

if(num3 % 5===0){
    console.log("number " + num3 + " is divisible bye 5");
}
else {
    console.log("number "+ num3 + " is not divisible by 5");
}
// Checking for number 4 to see if it is divisible by 5

if(num4 % 5 ===0){
    console.log("number  " + num4 + " is divisible bye 5");
}
else {
    console.log("number "+ num4 + " is not divisible by 5");
}

//Check if the first number is larger than the last. Cache the result in a variable.


if (num1>num4){
    console.log("number "+num1 + " is greater than "+ num4);

}
else{
    console.log("number "+ num1 + " is not greater than "+ num4);
}

//Subtract the first number from the second number.

const subNum1Num2 =  (num1 - num2);
console.log(num1 + "-" + num2 + " is " + subNum1Num2);

//Multiply the result by the third number.

const Multiply = (subNum1Num2 * num3);
console.log( subNum1Num2 + "*" + num3 +  " is " + Multiply);

//Find the remainder of dividing the result by the fourth number.

const rem = (Multiply % num4);
console.log( Multiply + " % " + num4 + " is " + rem);

//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) 
//in other logic comparisons. Rename the variable as appropriate.

const operator = num1 > 25 || num2 > 25 || num3 > 25 || num4 > 25;
const isUnique = num1 != num2 && num1 != num3 && num1 != num4 && num2 != num3 && num2 != num4 && num3 != num4;

const isValid = sumOfNums  && !isOver25 && isUnique;

console.log (`The four numbers are valid according to the provided criteria: ${isValid}.`) ;

//###################################################################################################################################

//Part 2: Practical Math

/*
You are planning a cross-country road trip!
The distance of the trip, in total, is 1,500 miles.
Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.
The average cost of fuel is $3 per gallon.
Set up a program to answer the following questions:
How many gallons of fuel will you need for the entire trip?
Will your budget be enough to cover the fuel expense?
How long will the trip take, in hours? */

const totalDistance = 1500;
const TotalFuleOf55 =  totalDistance/30;
console.log(TotalFuleOf55);

const TotalFuleOf60 = totalDistance/28;
console.log(TotalFuleOf60);

const TotalFuleOf75 = totalDistance/23;
console.log(TotalFuleOf75);

//The total cost for 55 Mile per hour is as follows:
const TotalCost = TotalFuleOf55 * 3;
console.log(TotalCost);

//The total cost for 60 Mile per hour is as follows:
const TotalCost1 = TotalFuleOf60 * 3;
console.log(TotalCost1);

//The total cost for 75 Mile per hour is as follows:
const TotalCost2 = TotalFuleOf75 * 3;
console.log(TotalCost2);


//Will your budget be enough to cover the fuel expense?

console.log("since I have the total budget of $175 \n my expence in 55 miles/h is $150"+
 "\n for 60miles/h is $160.7 \n for 75miles/h $195.7 " );
 console.log("75 miles/hr the budget is not enough!");

// How long will the trip take, in hours? */

const time1 = totalDistance/55;
console.log("at 55miles/h the time will take is "+ time1);

const time2 = totalDistance/60;
console.log("at 60miles/h the time will take is "+ time2);


const time3 = totalDistance/75;
console.log("at 75miles/h the time will take is "+ time3);

console.log("\n****************  RESULT  *********");
console.log("At 55miles/h the total fule needed is " + TotalFuleOf55 + " gallons" );
console.log("Total cost is $" + TotalCost);
console.log("total time is  " + time1);
console.log("***********************************\n");

console.log("\n****************  RESULT  *********");
console.log("At 60miles/h the total fule needed is " + TotalFuleOf60 + " gallons" );
console.log("Total cost is $" + TotalCost1);
console.log("total time is  " + time2);
console.log("***********************************\n");


console.log("\n****************  RESULT  *********");
console.log("At 75miles/h the total fule needed is " + TotalFuleOf75 + " gallons" );
console.log("Total cost is $" + TotalCost2);
console.log("total time is  " + time3);
console.log("***********************************\n");

console.log("According to our budget the most reasonable speed would be 55miles/h!!!")