console.log("Basics of javascript with meta");

//Variables
var petDog = "Rex";
var petCat = "Pepper";
console.log(petDog);
console.log(petCat);
console.log("My pet dog's name is :",petDog);
console.log("My pet cat's name is :",petCat);
var catSound = "purr";
var dogSound = "woof";
console.log(petDog + " says " + dogSound);
console.log(petCat + " says " + catSound);
catSound= "meow";
console.log(petCat+ " now says " + catSound);

//Operators
var score = 8;
console.log("Mid-level skills: ",score>0 && score<10);

var timeRemaining = 0;
var energy = 10;
console.log("Game over: ", timeRemaining ==0 || energy ==0);

var now = "Now in ";
var three = 3;
var d = 'D!';
console.log(now + three.toString() + d);