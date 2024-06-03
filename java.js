let x=5
console.log(-5*3);
console.log(" JavaScript " + 50 );
console.log(17 % 5);
console.log( 5 %17);
console.log( 5 / 10);
console.log(4 === '4');
console.log(4!=5);
console.log(7<=8);
console.log("Hello" + 5);
console.log(Math.ceil(x)-Math.floor(x));
console.log(Math.pow(x,2));
// q)2-----------------------------------------
let numbe = prompt("Please enter a number:");
alert("thank you: " + numbe);
// q3)-------------------------------
let num1=Number(prompt("enter first number"));
let num2=Number(prompt("enter scand number"));
if (num1 > num2) {
    alert("The numbers in ascending order are: " + num2 + ", " + num1);
} else {
    alert("The numbers in ascending order are: " + num1 + ", " + num2);
}
// q4)------------------------------------------------------
let num3=Number(prompt("enter three number"));
let num4=Number(prompt("enter four number"));
if (num1 > num2) {
    alert("The larger number is: " + num3);
} else if (num2 > num1) {
    alert("The larger number is: " + num4);
} else {
    alert("Both numbers are equal.");
}
// q50-------------------------------------------
let num5=Number(prompt("enter five number"));
let num6=Number(prompt("enter six number"));
var sum = num5 + num6 ;
alert("the sum of tow number is  :" + sum );

// q60-----------------------------------------------

let num7=Number(prompt("enter the number"));
let num8 = " ";
switch(Number(num7)){
    case 1:
        num8="One";
        break;
    case 2:
        num8="Two";
        break;

    case 3:
        num8="Three";
        break;

    case 4:
        num8="Four";
        break;

    case 5:
        num8="Five";
        break;

    case 6:
        num8="Six";
        break;

    case 7:
        num8="Seven";
        break;

    case 8:
        num8="Eight";
        break;

    case 9:
        num8="Nine";
        break;

    default:

        num8="plese try again";
        break;
}
alert(num8)

