// JS String Methods

// Methods are Functions 
// String Methods are pre-built by Javascript, so all you have to do is use them!
// Full list can be found here: https://www.w3schools.com/jsref/jsref_obj_string.asp

// Whenever we put a function inside an object its referred to as a method. But its used the 
// same way as a regular function.

//********************toUpperCase & toLowerCase********************// - will uppercase/lowercase letters

// 1st lets declare a string like so:
// EX:
// var name = "luke"

// 2nd luke needs his name fully Uppercased. We do that like so:
// EX:
// name.toUpperCase() 

// This (toUpperCase) is the method we are calling on the "name" variable. Now its a method so
// we have to call it and tell it to execute. Without the parentheses this none of it will work.

// If we console log this we will see what is being output and returned from this method like so:
// EX:
// console.log(name.toUpperCase())

// Now the result we will have is luke in all Caps.

// If we wanted to save this new string we could do the following like so:
// EX:
// var uppercasedLuke = name.toUpperCase() 

// Then we will console log the variable named "uppercasedLuke" like so:
// EX:
// console.log(uppercasedLuke)

// We now will get the same result as the formula before.

// The nice thing about these string methods is typically they will not destroy your old data.
// So if we now add a console log for the variable name "name" it will still be lower cased.

//***Now how do we turn the now uppercased Luke back to all lowercased?***// 
// Well we use basically the same syntax and grab the name like we did before but only now we'd use
// the new variable name "uppercasedLuke" like so:
// EX:
// var lowercasedLuke = uppercasedLuke.toLowerCase()

// Then we will console log "lowercasedLuke" to see the results like so:
// EX:
// console.log(lowercasedLuke)

// Now we will see that using the "lowercasedLuke" on our "uppercasedLuke" has returned the name 
// to all lowercased letters.

//***Remember to add the parentheses to execute the method.

//***To chain onto a string use a dot "." and parentheses.



//********************concat********************//

//***Is used for addition operator to add two strings together***//

// We use the "+" symbol to add the two strings like so:
// EX: 
// "name" + "s"

// That would put out the result of "names".

// There is a method that does this for us as well if we dont want to use the plus operator we can
// use concat.

// So using luke again with the variable name "name" we can declare another variable like so:
// EX:
// var s = "s"

// Now we will use concat to add the "s" to the name "luke" and console log it like so:
// EX:
// var newName = name.concat(s)
// console.log(newName)

// We now will get the new result which would display as "lukes".





//********************split********************//   - Turn a string into an array.

// Sometimes we may need to change our data types. Lets say we have a function that takes in a string
// but for some reason needs it to be an array so it can use some sort of other function on it.

//***How can we turn the string into an array?***//

// Lets make a new string like so:
// EX:
var animal = "tiger"

// Now lets make an array of 5 characters that spell tiger like so:
// EX:
// var characterArr =  animal.split()
// console.log(characterArr)

// It now has put the word tiger in an array but it didnt do what we wanted it to of each individual
// character seperated so this can take an operator like so:
// EX:
// var animal = "tiger"
// var characterArr = animal.split("")

// When we use the qoutes it tells the operator to split it at every single item. If we put empty qoutes
// its saying make a split in between each character. 

// Now if we console log this we will get each letter in an array like so:
// EX:
// console.log(characterArr)

//***Now lets say we want to have an array of two items such as "ti" and "er" and we're going to 
// get rid of the "g". We can tell our string to split at any "g" characters like so:***//
// EX:
// var animal = "tiger"
// var characterArr = animal.split("g")
// console.log(characterArr)

// Now we get a split array with the "ti" and "er" and the "g" is gone.




//********************slice********************//   - cut up a string (cuts it into parts if needed)

// Lets make a string like so:
// EX:
var phoneNumber = "6764567890"

// Now what we want to output is this number like a real phone number like this "676-456-7890". So
// really we need to cut this into 3 parts and put some dashes in between those parts and smush them 
// back together like so:
// EX:
// phoneNumber.slice()

// ------------------------------------------------------------------------------
//***Slice by default will take 2 arguements:***//
// #1: Start, what index number do you want to start slicing in the string.
// #2: End, what index number do you want me to stop slicing.
// ------------------------------------------------------------------------------

// So if we say start at index 0 and end at index 3 lets see what we get like so:
// EX:
var first3 = phoneNumber.slice(0, 3)
console.log(first3)

// The result we get now is the numbers "676".

// ------------------------------------------------------------------------------
// Now with what we've learned lets try to do this on our own. Try to get the next 3 numbers then the
// last 4 numbers then concat them all together into a new string so we get this "676-456-7890" as our
// output.

//***MY RESULTS:***//
// So with the first 3 numbers saved we now need to get the second 3 numbers like so:
// EX:
var next3 = phoneNumber.slice(3, 6)
console.log(next3)
// The result we get now is the numbers "567".

// So with the second 3 numbers saved we now need to get the last 4 numbers like so:
// EX:
var last4 = phoneNumber.slice(6, 10)
console.log(last4)
// We do not need to add a second number/arguement because it will automatically cut to the end of the string
// so we dont need to tell it where to stop. It will automatically stop after the 0.

// Now we must concat each array and insert a dash to seperate each array to display the result of 
// "676-456-7890".
// Part 1: Using concat instead of the "+" symbol.
// EX:
var dash1 = "-"
var newNumber1 = first3.concat(dash1)
var newNumber2 = next3.concat(dash1)

var concatPart1 = newNumber1.concat(newNumber2)
var concatPart2 = concatPart1.concat(last4)

console.log(concatPart2)

// Part 2: Using "+" instead of concat.
// EX:
var phoneNumber2 = first3 + "-" + next3 + "-" + last4
console.log(phoneNumber2)

// Both of my methods work but refer to the instructors results.

//***SCRIMBA INSTRUCTOR RESULTS:***//
// EX:
var phoneNumber = "6764567890" // "676-456-7890"
var first3 = phoneNumber.slice(0, 3)
var next3 = phoneNumber.slice(3, 6)
var last4 = phoneNumber.slice(6)
var phoneNumWithDashes = first3 + "-" + next3 + "-" + last4
console.log(phoneNumWithDashes)
// ------------------------------------------------------------------------------


//********************indexOf********************//   - I need to know if the letter "a" occurs in a 
//                                                                          string and at what index.

// Lets make a variable to a city and we want to find out where the capital "C" is or what is the index
// number of the capital "C".

// We'd make a variable titled "city" like so:
var city = "New York City"

// We can read this and see that it is at index 9 and we count the blank spaces also. But if its a 
// long list and we just want to find the capital "C" quick we can do so like this:
// EX:
var indexofC = city.indexOf("C")
// Then we want to console log this variable to see if this does give us index 9 like so:
console.log(indexofC)

// We now get the result of index 9 and we can try this with another one such as "i" like so:
var indexofi = city.indexOf("i")
console.log(indexofi)
// Now we get the result of index 10 but what if we say space in the qoutes instead? Is it going to
// find the first space and give the result of 3 or will it give us the second space and give 
// the result of 8. Or is it going to do both or neither? lets test it like so:
// EX:
var indexofspace = city.indexOf(" ")
console.log(indexofspace)

// We get the result of 3, so indexOf finds the first match you give it and kicks out that. So if we 
// were looking for the last space character we may use another method like lastindexOf which exists.

//***What if we give a character that is not in the string? What does it return to let us know hey I
// didnt find an exclamation point? Lets find out like so:
// EX:
var indexOfExclamation = city.indexOf("!")
console.log(indexOfExclamation)

// What we will get is a -1 so this is indexOf's way of saying I did not find what you were looking for
// heres your -1 to let you know.
