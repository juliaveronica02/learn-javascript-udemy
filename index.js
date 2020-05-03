// // output name.
// var myName = "Julia Veronica";
// var yourName = prompt("What is your name??");
// alert("My name is " + myName + ", welcome to my course" + yourName + "!");

// //output game.
// var gameLevel = 1;
// gameLevel = 2;
// gameLevel = 3;
// alert("Your level is currently: " + gameLevel);

// // function operator.
// function test() {
//   var a = "3";
//   var b = "8";
// }
// var c = a;
// a = b;
// b = c;
// console.log("a is" + a);
// console.log("b is" + b);

// // alert.
// var message = "Hello";
// var name = "Juve";
// alert(message + "there, " + name);

// //length is number character.
// var name = "Juve";
// name.length;

// // You have written 182 characters, you have -42 characters left.
// var tweet = prompt("Compose your tweet writing:");
// var tweetCount = tweet.length;
// alert(
//   "you have written " +
//     tweetCount +
//     " characters, you have " +
//     (140 - tweetCount) +
//     " characters remaining."
// );

// // slice 1.
// // programmer always count from zero (0).
// // slice (x,y) is mean the (x) was start position and (y) is ending position.
// var name = "Julia Veronica";
// name.slice(0, 4);

// // slice 2.
// var name = "Julia Veronica";
// name.slice(4);

// // slice 3.
// var name = "Julia Veronica";
// name.slice(6, 7);

// // slice challange.
// var tweet = prompt("Compose your tweet:");
// var tweetUnder140 = tweet.slice(0, 140);
// alert(tweetUnder140);

// // slice challange 2.
// alert(prompt("Compose your tweet:").slice(0, 140));

// // toUpperCase().
// var name = "Julia Veronica";
// name.toUpperCase();

// toUpperCase() 2.
// var name = "Julia Veronica";
// name = name.toUpperCase();

// toLowerCase().
// var name = "Julia Veronica";
// name = name.toLowerCase();

// challange string.
// 1. create a var that stores the name that user enters via prompt.
// var name = prompt("what is your name?");
// 2. capitalise the first letter of their name.
// a. isolate the first character (char).
// var firstChar = name.slice(0, 1);
// b. turn the first char to upper case.
// var upperCaseFirstChar = firstChar.toUpperCase();
// c. isolate the rest of the name.
// var restOfName = name.slice(1, name.length);
// d. concactenate the first char with the rest of the char.
// var capitaliseName = upperCaseFirstChar + restOfName;
// 3. use the capitalised version of their name to greet them using an alert.
// alert("Hello, " + capitaliseName);

// challange String 2.
// 1. create a var that stores the name that user enters via prompt.
// var name = prompt("what is your name?");
// 2. capitalise the first letter of their name.
// a. isolate the first character (char).
// var firstChar = name.slice(0, 1);
// b. turn the first char to upper case.
// var upperCaseFirstChar = firstChar.toUpperCase();
// c. isolate the rest of the name.
// var restOfName = name.slice(1, name.length);
// d. change the rest of the name to lower case.
// restOfName = restOfName.toLowerCase();
// e. concactenate the first char with the rest of the char.
// var capitaliseName = upperCaseFirstChar + restOfName;
// 3. use the capitalised version of their name to greet them using an alert.
// alert("Hello, " + capitaliseName);

// Number challange.
var dogAge = prompt("How old is your dog?");
var humanAge = ((dogAge - 2) * 4)+ 21;
alert("Your dog is " + humanAge + " years old in human years");
