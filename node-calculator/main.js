const readline = require("readline-sync")

let num1 = readline.questionInt("Please enter your first number: ");
let num2 = readline.questionInt("Please enter your second number: ")

const operations = ["add","sub", "mult", "div"]

let userInput = readline.keyInSelect(operations,"Please enter the operation to perform: add, sub, mult or div")

function add(num1, num2){
    console.log("The result is: " + (Number(num1) + Number(num2)))
}
function sub(num1,num2){
    console.log("The result is: " + (Number(num1) - Number(num2)))
}
function mult(num1, num2){
    console.log("The result is: " + (Number(num1) * Number(num2)))
}
function div(num1, num2){
    console.log("The result is: " + (Number(num1) / Number(num2)))
}

if(userInput === 0){
    add(num1, num2)
} else if(userInput === 1){
    sub(num1, num2)
} else if(userInput === 2){
    mult(num1, num2)
} else {
    div(num1, num2)
}