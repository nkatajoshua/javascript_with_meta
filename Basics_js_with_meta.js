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

//conditional statments
var age =10;
if(age>=65){
    console.log("You gte your income from your pension");
} else if (age<65 && age>=18){
    console.log("Each month you get salary");
} else if (age <18){
    console.log("You get an allowance");
} else {
    console.log("The value of the age variable is not numerical");
}

var day = "Sunday";

switch(day){
    case "Sunday" :
      console.log("Do something on Sunday");
      break;
    case "Tuesday":
       console.log('DO something on Tuesday');
       break;
    default:
       console.log('Just do something');
       break;
}

//for loop and while loop
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')
for (var n=1; n<=5; n++){
    console.log(n);
}
console.log('Counting completed');

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')
var m=1
while(m<=5){
    console.log(m);
    m++;
}
console.log("Counting completed!");