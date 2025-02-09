// STRING

// Write a variable and call it "dogQuestion" and have the value of "But what if I like dogs more than cats?"
// use the .length method to determine the length of the string value. 
// Code 

// Result:

let dogQuestion = ("But What if I like dogs more than cats?");

console.log(dogQuestion.length);

// ----------
// Write a variable and call it noms and have the value of the name any type of snack you like, 
// use the .length method to determine the length of the string value. 
// Code

// Result:

let noms = ("Popcorners");
console.log( noms.length);

// ----------
// Search the string "Fighting Evil by Moonlight" for string "Moonlight" content using the correct method.
// Code

// Result:

let moonLight = "Fighting Evil by Moonlight";

console.log(moonLight.substring("17"));




// ----------
// Find the first index and the last index of the word "sea" appearing in the following sentence:
// "she sells seashells by the seashore" 
// Code
let seaShells = "she sells seashells by the seashore";

console.log(seaShells.indexOf("sea"));
console.log(seaShells.lastIndexOf("sea"));

// Result:

10
27


// ----------
// Check if the following sentence includes the string "seashells":
// "she sells seashells by the seashore" 
// Code
let seaShells = "she sells seashells by the seashore";

let result = seaShells.includes("seashells");

// Result:
 True


// ----------
// Split the following sentence by the string "I like ":
// "About me: I like ice cream. I like coffee. I like chocolate."
// Note: This will create an array
// Code
let iceCream = "About me: I Like ice Cream. I like coffee. I like chocolate."

iceCream.split('  ');

// Result:



// ----------
// Remove the string "but I do not like " from the following sentence:
// "I love to go to beach but I do not like to get sunburn." 
// (Hint: use either slice or substring method)
// Code

let butiLike = " I love to go to beach but I do not like to get sunburn.";

butiLike.split("but I do not like");

// Result:
 I Love to go to the beach, to get sunburn.


// ----------
// Convert the following string to all "*" as if it is your password (i.e. *********)
// "th!$!$myp@$$w0rd" 
// (Hint: You will need as many asterisks (*) as the number of characters in there)
// Code

let passWord = "th!$!$myp@$$w0rd" ;

passWord = passWord.replace("th!$!$myp@$$w0rd" ,"****************");

console.log(passWord);

// Result:



// ----------
// Check if the following sentence starts and ends with the same word:
// "Saturday night plans made in the last Saturday"
// Code

// Result:
let saturdayNight = "Saturday night plans made in the last Saturday";

saturdayNight.startsWith("Saturday");
saturdayNight.endsWith("Saturday");


// ----------
// Define two variables named favoriteFood and favoriteDrink.
//  Concatenate the following "I love" + favorite food + favorite drink "!"
// Code

let favoriteFood = "Sushi";
let favoriteDrink = "Coffee";

console.log( "I love " + favoriteFood + " "+ favoriteDrink);


// Result:



// ----------
// CONCAT METHOD
// Concatenate the same string above using the concat() method
// Code

// Result:

console.log( "I love " ,favoriteFood.concat(" ",favoriteDrink));


// ----------
// Replace "no" value in the "I have no interest in Boba" 
// string with a word of your choice using the correct method.
// Code

let noValue = "I have no interest in boba";

console.log(noValue.replace("no", "Bananna"));


// Result:



// ----------
// Replace "young" values in the “She was young the way an actual young person is young.”
//  string with a word of your choice using the correct method.
// Code

// Result:

let youngValue = " She was young the way an actual young person is young";

console.log(youngValue.replace("young","mature"));


// ----------
// Trim this string "      Tell me whyyyy!                 ".
// Code

let trimString = "      Tell me whyyyy!                 ";

console.log(trimString.trim());


// Result:




// NUMBER / MATH

// ----------
// Convert 1400 into a string.
// Code

let tooString = 1400;

toString(tooString);


// Result:



// ----------
// Convert the string "02130" into an integer
// Code

let ohTwo = "02130";
parseInt(ohTwo);

// Result:

2130

// ----------
// Convert the string "3.14159" into an integer.
// Code



let ohPie = "3.14159";
parseInt(ohPie);

// Result:

3

// ----------
// Convert the string "3.14159" into a decimal.
// Code

let ohPie = "3.14159"
console.log(ohPie.toFixed())

// Result:

3

// ----------
// Check if "3.14159" (string) is a number or not.
// Code

// Result:
let numNum = "3.14159";
console.log(numNum.isNan());


// ----------
// Convert the boolean true and false into integers
// Code

let valueTrue = true;
let valueFalse = false;

console.log(valueFalse.parseInt());
console.log(valueTrue.parseInt());


// Result:



// ----------
// Print to the console the smallest number in this list: 85, -3, 5, 93.2, -42.4 (list of numbers must be passed in this order)
// Code

// Result:



// ----------
// Print to the console a random number between 1 to 10.
// Code:

// Result:



// ----------
// Print to the console a random number between 14 to 21.
// Code

// Result:



// ----------
// Round up and then round down all of the following numbers:
// 14.2, 14.8, 14.5
// Code

// Result:



// ----------
// Round all of the following numbers to the closest integer:
// 14.2, 14.8, 14.5
// Code

// Result:



// ----------
// Find the absolute difference between the following numbers in that order:
// 7, 23
// Code

// Result:



// ----------
// What is 4 raised to the power of 6?
// Code

// Result:


// DATE

// ----------
// Print the current day, hour and year to the console, 
// separately?
// Code

// Result:



// ----------
// Challenge! (Optional)
// Print to the console the current date in the format of "MM/DD/YYYY" using Date object methods you learned 

// Code

// Result: