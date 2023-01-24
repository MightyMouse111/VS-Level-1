// Full list can be found here: https://www.w3schools.com/jsref/jsref_obj_array.asp

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);

/////////////////////////////////////////////////////////////////////////////////////////////
// #1 : Remove the last item from the vegetable array.
    vegetables.pop()
    console.log(vegetables)
/////////////////////////////////////////////////////////////////////////////////////////////
// #2 : Remove the first item from the fruit array.
    fruit.shift()
    console.log(fruit)
/////////////////////////////////////////////////////////////////////////////////////////////
// #3 : Find the index of "orange". 
    var orangeIndex = fruit.indexOf("orange")
    console.log(orangeIndex)
/////////////////////////////////////////////////////////////////////////////////////////////
// #4 : Add that number to the end of the fruit array.
fruit.push("1")
console.log(fruit)
/////////////////////////////////////////////////////////////////////////////////////////////
// #5 : Use the length property to find the length of the vegetable array.
console.log(vegetables.length)
/////////////////////////////////////////////////////////////////////////////////////////////
// #6 : Add that number to the end of the vegetable array.
    vegetables.push("3")
    console.log(vegetables)
/////////////////////////////////////////////////////////////////////////////////////////////
// #7 : Put the two arrays together into one array. Fruit first. Call the new Array "food".
    var food = fruit.concat(vegetables)
    console.log(food)
/////////////////////////////////////////////////////////////////////////////////////////////
// #8 : Remove 2 elements from your new array starting at index 4 with one method.
// METHOD 1: Best one to remove "carrot" and "tomato".
food.splice(4,2)
console.log(food)

// METHOD 2: Removes "carrot" and "tomato".
// removeFromIndex = [4,5];    
// for (var i = removeFromIndex.length -1; i >= 0; i--)
    // food.splice(removeFromIndex[i],1);
    // console.log(food)

// METHOD 3:
// let indexToRemove = [4, 5]; //We're looking to remove "carrot" & "tomato"

// food.reduceRight((_, elem, index) => {
//     if (indexToRemove.includes(index)) { //Our condition(s)
//         food.splice(index, 1);
//     }
// });

// console.log(food);

// METHOD 4: Don't know if this counts.
    // var newestArr = food.slice(0, 6)
    // console.log(newestArr)
/////////////////////////////////////////////////////////////////////////////////////////////
// #9 : Reverse your array.
food.reverse()
console.log(food)
/////////////////////////////////////////////////////////////////////////////////////////////
// #10 : Turn the array into a string and return it.
var string = food.toString()
console.log(string)