// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name and assign it the string 'Dane'.
// We check if name is equal to the string 'Mary'.
// It is not, so we do not execute the code in that block.
// Instead, we console.log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable called secret.
// We create a variable called code and assign it the number 123.
// We check if code is equal to 123.
// It is, so 'super' is assigned to secret and we multiply the value of code by 2, code is now 246.
// We check if code is greater than 250. It's not, so we don't execute the code in that block.
// Lastly, we console.log the value of secret which is 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create three variables: isStudent is assigned the boolean true,
// age is assigned the number 34, and zip is assigned the number 55407.
// We check if isStudent is true and if zip is greater than 80000. Zip is not greater than 80000,
// so we do not execute the code in that block.
// We check if isStudent is false or if age is less than 30.
// Neither is true, so we do not execute the code in that block.
// We check if isStudent is true. It is, so we console.log 'Welcome to Prime!' and end there.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

//FIX - colorOne is set to 'red' and colorTwo is set to 'blue'.
// colorOne should be 'blue' and colorTwo 'red'.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
//FIX - only colorOne is reassigned to 'purple', but colorTwo should be too.
// Should add colorTwo = 'purple'.
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
//FIX - time is a constant, but instructions say it is a variable.
// Should be let time = 4.
const time = 4;


//FIX - || checks if one or the other is true, but we want to check if both are true.
// Should be if (temp > 39 && time >= 4).
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
//FIX - minAge is a constant, but instructions say it is a variable.
// Should be let minAge = 21.
const minAge = 21;


//FIX - Here we're checking if minAge is less than or equal to age,
//but instructions say to check if age is greater than or equal to minAge.
// Should be if(age >= minAge).
if(minAge <= age) {
//FIX - this will console.log 'no entry', instructions say to console.log 'enter'
// Should be console.log('enter').
  console.log('no entry');
} else {
//FIX? - Not entirely sure if this is an issue, but with the fix above, both scenarios would now console.log 'enter'.
// Might be best to now have a different string to differentiate between the two results, such as console.log('no entry').
  console.log('enter');
}
*/
