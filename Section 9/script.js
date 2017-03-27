//EXERCISE ONE
//var userFirstName = prompt("What is your first name?");
//var userSecondName = prompt("Well, " + userFirstName + " what is your second name?");
//var userAge = prompt("Also, " + userFirstName + " " + userSecondName + " what is your age?")
//
//var fullName = userFirstName + " " + userSecondName;
//console.log("Your full name is: " + fullName);
//console.log("And your age is:" + userAge);

//EXERCISE TWO
//console.log("JavaScript file script.js loaded succesfully");
//var userAge = prompt("How old are you?");
//console.log("You are: " + (userAge * 365) + " days old");



//FOR LOOPS

console.log("NUMBERS BETWEEN -10 and 19");
for (var i = -10; i <= 19; i++) {
    console.log(i);
}

console.log("EVEN NUMBERS BETWEEN 10 and 40");
for (var i = 10; i <= 40; i++) {
    if( i % 2 === 0){
        console.log(i);
    }
}

console.log("ODDS BETWEEN 300 AND 333");
for (var i = 300; i <= 333; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("ALL DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
for(var i = 5; i <= 50; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log(i);
    }
}