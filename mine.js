

// var userAge = window.prompt("Enter your Age")

// if( userAge >20 && userAge <= 30)
// {
//     console.log( "acc")
    
// }
// else
// {
//     console.log("rej")
// }
// =============================================================================

// Write a program that allow to user enter number then print it Example
// Input: 5
// Output: 5

// var userAge = window.prompt("Enter your Age");
// window.alert("your Age is " + userAge)



// ==================================================================================


// var firstNumber = window.prompt("Enter your First Number");
// var secondNumber = window.prompt("Enter your Second Number");
// if(firstNumber > secondNumber)
// {
//     window.alert("the Max Number is " + firstNumber)
// }
// else
// {
//     window.alert("the max number is " + secondNumber)
// }




// =====================================================================================
// Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
// Example 1
// Input: -5
// Output negative Example2
// Input: 10
// Output positive

// var number = window.prompt("Enter your Number ")
// if( number >= 0)
// {
//     window.alert( "your number positive")

// }
// else{
//     window.alert("your number is negative")
// }

// ===========================================================================================

// Write a program that take 3 integers from user then print the max element and the min element.
// Example 1
// Input:7,8,5
// Output:
// max element = 8
// min element = 5

// var firstNumber = window.prompt("Enter Your First Number ");
// var secNumber = window.prompt("Enter Your second Number ");
// var thirdNumber = window.prompt("Enter Your third Number ");

// if(firstNumber > secNumber && secNumber> thirdNumber )
// {
//     window.alert("max number is"+firstNumber +"mini number is"+thirdNumber)
  

// }
// else if( secNumber > thirdNumber && thirdNumber > firstNumber)
// {
//     window.alert("max number is"+secNumber +"mini number is"+firstNumber )
   
// }
// else( thirdNumber >firstNumber && firstNumber>thirdNumber)
// {
//     window.alert("max number is"+thirdNumber +"mini number is"+secNumber )
// }
//  ====================================================================


// var tank = ``;
// for( i =1905; i<=2022 ; i++)
// {
//     tank += `<option> ${i} </option>`
// }
// document.getElementById("test").innerHTML = tank;

//  var userNum =window.prompt("Enter Your Number ");

// window.alert(`your number is ${userNum}`)

// var num1 = window.prompt(`Enter your first Number `)
// var num2 = window.prompt(`Enter your second Number `)
// if(num1> num2)
// {
//     window.alert(`your max number is ${num1}`)
// }
// else
// {
//     window.alert(`your Max number is ${num2}`)
// }
// var num1 = window.prompt(`Enter Your First number`)

// if( num1 > 0)
// {
//     window.alert(`Your Number is Positive`)
// }
// else
// {
//     window.alert(`your number is negative`)
// }
// var num1 = window.prompt(`Enter your first Number `)
// var num2 = window.prompt(`Enter your second Number `)
// var num3 = window.prompt(`Enter your third Number `)
// if( num1 > num2 && num1 > num3 && num2 > num3)
// {
//     window.alert(`Max number is ${num1}` + `mini number is ${num3}`)
    

// }
// else if( num1< num2 && num1 < num3 && num2 < num3)
// {
//     window.alert(`mini number is ${num1}` + `Max number is ${num3}`)
    
// }
// else if( num2 > num1 && num2 > num3 && num1 > num3)
// {
//     window.alert(`Max number is ${num2}` + `mini number is ${num3}`)
// }

// else if( num2 < num1 && num2 < num3)
// {
//     window.alert(`mini number is ${num2}`)
// }
// else if( num3 > num1 && num3 > num2)
// {
//     window.alert(`Max number is ${num3}`)
// }

    
// else if( num3 < num1 && num3 < num2)
// {
//     window.alert(`mini number is ${num3}`)
// }
// else
// {
//     window.alert(`nothing`)
// // }
// var num = window.prompt(`Enter Your Number`)
// if( num%2==0)
// {
//     window.alert(`your Number ${num} is oven`)
// }
// else{
//     window.alert(`your number ${num} is odd`)
// }
// var char = window.prompt(` Enter Your Charcter`)
// if( char == "a" || char== "e" || char == "l" || char == "o" || char == "u")
// {
//     window.alert(`your charcyer ${char} is vowel`)
// }
// else
// {
//     window.alert(`your charcter is consonnt`)
// // }
// var num = window.prompt(`Enter Your Number `)
// for( i =1 ; i <= num ; i++)
// {
//     console.log( ` number is ${i}`)
// }
// var num = window.prompt(` Enter your number`)
// for( i = num ; i <= num*12 ; i = i+5)
// {
//     console.log(`your Number is ${i}`)
// }

var userName = window.prompt(`Enter Your Name`)
function sayHello(userName ) {
    window.alert(`welcome ${userName} `)
}
sayHello(userName);
