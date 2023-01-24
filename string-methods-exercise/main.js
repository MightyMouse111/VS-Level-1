///////////////////////////////////////////////////////////////////////////////////////////////
//#1 : Write a function that takes a string as a parameter and returns the same string in 
//                                   all capital letters followed by all lowercase letters.
///////////////////////////////////////////////////////////////////////////////////////////////
var hello = "hello"
var helloUpperCase = "hello"


function capitalizeAndLowercase(helloUpperCase) {


    
for(var i = 0; i < helloUpperCase.length; i++) {
    var uppercasedLuke = hello.toUpperCase() 

    for(var j = 0; j < uppercasedLuke.length; j++) {
        var lowercasedLuke = uppercasedLuke.toLowerCase()

        var combined = uppercasedLuke.concat(lowercasedLuke)

    }
}
console.log(combined)
}

capitalizeAndLowercase(helloUpperCase)
// console.log(helloUpperCase)
///////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////
//#2 : Write a function that takes a string as a parameter and returns a number that is half 
//                                                          the string's length, rounded down.
///////////////////////////////////////////////////////////////////////////////////////////////

/////////MY BEST WAY: May not be correct./////////
var hello = "Hello"
var helloWorld = "Hello World"

// var length = helloWorld.length
// console.log(length)

function check(string) {
    let x;
    // for(var i = 0; i < helloWorld.length; i++) {
    if (string.length % 1 == 0) {
      x = (string.length / 2);
    } 

    const number = Math.floor(x)
    console.log(number)
    // for(var j = 0; j < helloWorld.length; j++) {
    //     if (helloWorld.length % 2 == 0) {
    //         j = (helloWorld.length / 1);
    //     } else {
    //         j = (x.length / 1) - 1;
    //     }
        
        // return helloWorld.substring(0, x);
       
//   }
}
// console.log(check(helloWorld), "testing")
  // const half = check(helloWorld);
  
  // console.log(half + "\n" + Math.round(2.35))
//   console.log(half);
  // console.log(helloWorld + "\n" +Math.round(5.43))
//   console.log(helloWorld)


// console.log(helloWorld)

check(hello)
check(helloWorld)

///////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////
//#3 : Write a function that uses slice() and the other functions you've written to return the 
//                                                              first half of the given string. 
///////////////////////////////////////////////////////////////////////////////////////////////
//create a string and save it as a variable
//create the function
//inside of the function you can use the length property and divide by 2
//then you can use the slice method
//console.log results

var string1 = "Hello"
var string2 = "Hello World"

function halfString(text){
  var half = text.length / 2
  var slice = text.slice(0, half)
  console.log(slice)
}

halfString(string1)
halfString(string2)
///////////////////////////////////////////////////////////////////////////////////////////////
//#4 : Write a function that takes a string as a parameter and returns that string where 
//                        the first half is capitalized, and the second half is lowercase.
///////////////////////////////////////////////////////////////////////////////////////////////
//  ((((((Hint: If your string length is odd, use Math.floor() to round down.))))))
//
///////////////////////////////////////////////////////////////////////////////////////////////

var dessert = "hello world"

//PART 1:
//1.  Text is the parameter

//2.  The parameter holds a spot until a value comes along

//3.  Remember that what ever is written in the parentheses such as "text" like below is a reference
//                    to the variable we have above the function which in this case is "dessert".

//4.  We want to save a variable that is the "text" length and divide the length by 2 to get half
//                                                                                  of the string.

//5.  We want to save a variable that contains the text in "text" (aka our "dessert" variable) then 
//    we'd slice it from the be beggining of the string using the number zero (So that it starts from 
//    the beggining of the string array.) then next to that include our saved variable from above 
//    where the name gets the "text" length divided by two. Also when we do anything with the text 
//    of "text" its really going to slice the "dessert" variable string or whatever the name is of 
//                                                                            your Array or String.

//6.  We want to save a new variable that equals the name of the previous code above that slices
// and then we want to add the toUpperCase method after to get the first half
//  


function lowerUpper(text) {
//PART 1:
  var firstHalf = text.length / 2 //Divides the length of "hello world" by 2 making it now read "hello".
  var slice = text.slice(0, firstHalf) //Slices/starts from the beggining of the new variable name length firstHalf that equals "hello" till the end.
  var upper = slice.toUpperCase() //Uppercase our slice variable and save it to a variable.

  //PART 2:
  var secondhalf = text.length / 2
  var secondSlice = text.slice(secondhalf)
  var lower = secondSlice.toLowerCase()
  
  console.log(upper + lower)
}
//dessert is the argument
lowerUpper(dessert)


///////////////////////////////////////////////////////////////////////////////////////////////
//TO HELP WITH MIGRAINES: (Nyjia)

///Take a break and come back to it
//Lower brightness

///////////////////////////////////////////////////////////////////////////////////////////////
