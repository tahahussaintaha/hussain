//1. Write a program that takes user input. Convert and show the input in capital letters.

/*var userinput = prompt("Enter your text");
userinput = userinput.toUpperCase();
console.log(userinput);*/

//2. Write a program that takes user input. Convert and show the input in title case

/*var input = prompt("Enter your text");
var firstCharacter = userinput.slice(0,1);
var secondCharacter = userinput.slice(1);
firstCharacter = firstCharacter.toUpperCase();
secondCharacter = secondCharacter.toLowerCase();
console.log(firstCharacter + secondCharacter);*/

//Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.

/*var userinput = prompt("Enter your favourite Cell Phone Model");
console.log("Length of string is " + userinput.length);*/

//Write a program to display the last character of a user input

/*var userinput = prompt("Enter any thing");
console.log(userinput.slice(userinput.length - 1));*/

//Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser

/*var a = "Pakistani";
for(var i = 0; i<a.length; i++){
    if(a[i] === "n"){
        console.log("The index of character N in " + a + " is " + i);
        break;
    }
}*/

//Write a program to take user input and store username in a variable. If the username contains any special symbol among (@ . , !), prompt the user to enter a valid username.

/*var name = prompt("Please Enter your Username");
for(i=0; i<name.length; i++){
    if(name[i] == "@" || name[i] == "." || name[i] == "," || name[i] == "!"){
        console.log("Invalid name")
        break;
    }
}*/

/*You have a string “The quick brown fox jumps over the lazy
dog”. Write a program to count number of occurrences of word “the”
in given string.*/

/*var a = "The quick brown fox jumps over the lazy dog";
text = a.toLowerCase();
var counter = 0;
var txtToFind = "the";
for(i = 0; i<a.length; i++){
    if(a.slice(i, i+3) === "the"){
        counter++;
    }
}
console.log("The word 'the' is found " + counter + " times");*/

//Write a program to find the character at 3 rd index in the word “Pakistani” and display the result in your browser.

// var text = "Pakistani";
// console.log(text.charAt(3));

//Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var a = "Hyderabad";
// console.log(a.replace("Hyder","Islam"))

//Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

// var message = "Taha and Owais are good friends. They play cricket and football together."
// console.log(message.replace(/and/g, "&"));

// Write a program that takes a positive integer from user & display the following in your browser.
// a. number (example number: 7.5412)
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var a = +prompt("Enter a positive floating point number");
// console.log("Number is " + a);
// console.log("Round of Value of Number is " + Math.round(a));
// console.log("Floor Value of Number is " + Math.floor(a));
// console.log("Ceil Value of Number is " + Math.ceil(a));

// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. Number (example number: -8.546 )
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var h = +prompt("Enter a negative floating point number");
// console.log("Number is " + h);
// console.log("Round of Value of Number is " + Math.round(h));
// console.log("Floor Value of Number is " + Math.floor(h));
// console.log("Ceil Value of Number is " + Math.ceil(h));

//Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

//console.log(Math.ceil(Math.random() * 6));

//Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.

// var a = Math.ceil(Math.random() * 2);
// if(a == 1){
//     console.log("Tails");
// }
// else{
//     console.log("Heads");
// }

// Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input
// equals the secret number, congratulate the user.

// var a = Math.ceil(Math.random() * 10);
// var input = +prompt("Enter any number from 1 to 10", "1");
// if(a === input){
//     console.log("Congratulations, You Win");
// }
// else{
//     console.log("The secret number is " + a);
//     console.log("Try Again")
// }

// Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var weight = prompt("Enter your weight");
// weight = Number(weight);
// console.log(weight);

//Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// var x = "472";
// x = Number(x);
// console.log("Value is " + text + " Type is " + typeof(x));

// Write a program that converts the variable num to string.
// var number = 35.36 ;
// Remove the dot to display “3536” display in your browser

// var number = 35.36;
// number = number * 100;
// console.log(number.toString());

// 1. Write a program to control the length of decimals to 2. var percentage = 30 / 45 * 100; -> 66.66666666666666

// var percentage = 30 / 45 * 100;
// console.log(percentage.toFixed(2));

//Write a program that displays current date and time in your browser.

// var today = new Date();
// console.log(today);

//Write a program that alerts the current month in words. For example December.

// var months = ["January", "February", "March", "April", "May", "June", "July", "August"];
// var today = new Date();
// var mon = today.getMonth();
// console.log("Current Month: " + months[mon]);


//Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var today = new Date();
// var x = days[today.getDay()];
// console.log("Today is " + x.slice(0,3));

//Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var today = new Date();
// if(days[today.getDay()] == "Saturday" || days[today.getDay()] == "Sunday"){
//     console.log("It's Fun Day");
// }

// Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var today = new Date();
// if(today.getDate() < 16){
//     console.log("First Fifteen days of month");
// }
// else{
//     console.log("Last days of month");
// }

// Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var today = new Date();
// console.log("Current Date: " + today);
// console.log("Elapsed Milliseconds since January 1, 1970: " + today.getTime());
// console.log("Elapsed Minutes since January 1, 1970: " + (today.getTime()) / 1000 / 60);


//Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// var a = new Date();
// if(a.getHours() < 12){
//     console.log("Its AM");
// }
// else{
//     console.log("Its PM");
// }

//Write a program that creates a Date object for the last dayof the last month of 2020 and assigns it to variable named laterDate.

// var a = new Date("December 31, 2020");
// console.log(a)
