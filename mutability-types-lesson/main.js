//**********Mutability and Types**********//

//-------------------------------------------------------------------------------------------------
//**Immutable - Cannot be changed - PASSED BY VALUE
// What data types in javascript cannot be changed from what they are? 
// - String
// - Number
// - Booleans

//-------------------------------------------------------------------------------------------------
//**Mutable - Containers - PASSED BY REFERENCE. 
//           Think of these data types as Containers. These are data types that hold other data types.
//           The reason these are known as mutable because we can change their contents. But does not
//           mean we can reassign them. PASSED BY REFERENCE.
// - Array - If we want the number 1 to be the number 6 we can say the following to do so.
// EX:
var arr = [1, 2, 3, 4, 5]
arr[0] = 6
console.log(arr)
// I am swapping this number (1) out for this new number (6). Doing this will give us the result we 
// wanted such as [6, 2, 3, 4, 5] in the terminal window.

// It is mutable we can pull things out of the array box or delete them or move them around. This container
// is mutable. Mutability does not mean we can make a new box.

// More than likely we wont be reassigning an array we'll be swapping contents out of it using methods or
// some other mechanism. Objects are the same way.

// - Object - If we want another property to be added to our data such as true to mutate it we'd do
//            it like so:
// EX:
var person = {
    name: "harry",
    age: 12
}
// Added property that mutates our data.
person.hasWand = true
    
console.log(person)
// We will see now when we run this that the new property that was added mutated the object and result.

// The same way that it is mutable we can delete things. Objects come with a delete key word. We can say
// delete person dot hasWand and delete that entry. Now when we console log person even though we are
// adding the property here we're immediately removing it and we'll see that he no longer has a wand like
// so:
// EX:
delete person.hasWand
    
console.log(person)


// The reason why this is important is earlier we covered "what does it mean to pass by reference?" because mutable data types
// are PASSED BY REFERENCE. So lets use the example from above aka person. So we have this person and what we are going to say 
// now is the following:
// EX:
var newPerson = person
// Now our question in an earlier lesson was "did we just make a new object?". Is person and newPerson two different boxes
// with the same looking contents but actual different boxes? The way to test that is after we've done this assignment we'll 
// say newPerson dot hasWand equals true. Now if newPerson was its own object apart from person then person should be left 
// alone but when we console log person we'll see that person has a wand. Don't let this trick you we have two variables
// but we have one box. Both variables are pointing at the same box in memory so changing one affects the other because they
// are the same thing. This is how arrays and objects work when we say something like this. They are the same thing their
// just looking at the same data.

//**Mutable
// Now primitive data types are not that way their passed by value. Because these values all exist in our computer every
// character every string and every number. So when we say the following:
// EX:
var age = 10
var otherAge = age
// If we were to change otherAge to now equal 12 will age stil be 10 or will age have changed or will otherAge have changed?
// Lets console log age and see what result we get like so:
console.log(age)
// What we'll see is that it is still 10, so PASSED BY VALUE thats what this is referred to. The value is passed through the 
// other variable and that value exists in memory and remember its not mutable it cant be changed. So when we say age equals
// 10 otherAge also equals 10 and then we change otherAge to 12 age is unaffected. Where as completely opposite with our person
// example where we assigned them to the same object changed one but really it affected the object they both were looking at.
//
//
//
//
//
//
//

//-------------------------------------------------------------------------------------------------

//**typeof - Returns the type of the data immediately to its right.

// EX: So if we use our person object from above and we wanted to know its type and we wanted to see if it is the type of an
// object or if its a type of an array or string. We would find out by doing the following like so:
console.log( typeof person)
// What we will get returned is object. So lets try this lets switch person with typeOf "Rick" and what do we think we'll get?
// EX:
console.log( typeof "Rick")
// What we will get returned now is string. Now lets do another one but this time we will say typeOf 10 and what will we get?
// EX:
console.log( typeof 10)
// What we will now get returned is number. Now lets do another one but this time we will add an array to the typeOf with the
// numbers 1-4. What do we think we'll get when we run the following like so:
// EX:
console.log( typeof[1, 2, 3, 4])
// What we will now get returned is object so thats one of the weird things in javascript. We may have heard that before
// that everythings an object. Just let that thought float around for now we dont need to get into depth why that is. Just 
// know that this cant be used to see is it the typeOf an array because as far as javascript is concerned its an object.

//-------------------------------------------------------------------------------------------------

// With data types in javascript we have our 5 main types such as:
// - String
// - Number
// - Booleans
// - Array
// - Object
// Some are mutable and some or not immutable they cannot be changed.

//-------------------------------------------------------------------------------------------------

// EXTRA NOTES FROM SCRIMBA:
// Mutability - the ability to change (mutate) a peice of data

    // Immutable - cannot be changed
    // String
    // Number
    // Boolean
    
// Mutable - can be changed
    // Array
    // Object
    
// The 'typeof' operator will return the type of the data immediately to its right
// ex:
    // var name = "steve"
    // console.log( typeof name ) // "string"

//-------------------------------------------------------------------------------------------------