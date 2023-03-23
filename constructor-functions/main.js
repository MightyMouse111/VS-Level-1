//**********Constructor Functions**********//

// They build objects 
// "new" - instantiates the object

// Constructor Functions - functions that build objects that looks a certain way. Then we can use the
// constructor function using a keyword called "new" that instantiates the object.

// Instantiate or intantiations just means making an instance of something. So we're basically building
// a little factory that can output objects and then to have that factory run and produce objects we
// use the "new" keyword in javascript to instantiate a new object.

//------------------------------------------------------------------------------------------------------

// We're going to make a constructor function that builds cars or car looking objects. So first we'll
// use the keyword "function" it works the same way as far as declaring it like a regular function but
// here's the first BIG DIFFERENCE. All of our functions start with a lowercase letter if its a regular
// function but if it is a constructor function it is uppercased. So we're going to make a function
// called "Car" like so:
// EX:
// function Car(){
//    
// }
// By the uppercase we're denoting this is for outputting car objects. It is a constructor function.

// So now the car needs to be told "what data are you going to give me?" much like a regular function. So
// what are something(s) that all cars have? Maybe a Make/Model/Year we'll start with that like so:
// EX:
// function Car(make, model, year){
//    
// }

// So the car will take the make like "mazda" and a model like "3" and the year like "2015". If we recall
// from our lesson on objects what is the keyword we can use in objects to refer to it's self? The answer
// is "this" and is a really important word for constructor functions. It's going to say "The object youre 
// making should have this property equal to something" like so:
// EX:
// function Car(make, model, year){
    // this.make = make
    // this.model = model
    // this.year = year
// }

// This is a Constructor Function we can use the new key word(s) with car and give it this data and it will
// give us an object that has a dot Make/Model/Year set to the data we passed in. So let's try this by making
// a Jeep Cherokee below like so:
// EX:
// var jeep = new Car()

// So "new" is that keyword and when we put it before a function being called that is telling javascript 
// "this is not a regular function call we are instantiating an object through a constructor function". Now
// we need a pass at its properties and to console log "jeep" to see what we get like so:
// EX:
// var jeep = new Car("Jeep", "Cherokee", 1995)
// console.log(jeep)
// Now when we run this will we get the result of the entire constuctor as shown below.
// RESULT: Car { make: 'Jeep', model: 'Cherokee', year: 1995 }

// If we want to be specific and just have one of the properties populate we can do it like so:
// EX:
// console.log(jeep.make)  //Make
// console.log(jeep.model) //Model
// console.log(jeep.year) //Year
// RESULT: 
//Jeep
//Cherokee
//1995

// So this is Creating the object. The nice thing is we can now use the example from above as many times as we
// want by copying the way its written but changing the new cars Make/Model/Year like so:
// EX: Copy this "var jeep = new Car("Jeep", "Cherokee", 1995)" but make it for a mazda with different info.
// var mazda = new Car("Mazda", "3 hatchback", "2015")
// Now if we want to only console log the mazda's model we can like so:
// EX:
// console.log(mazda.model)
// Now we will get the model for the mazda in our terminal.

//------------------------------------------------------------------------------------------------------

// Now just like Regular Objects these Constructor Functions can build objects that have methods in them as 
// well aka the these "this" doing words. When we use the "this" it means this is what a car does but what does
// a car do? 

// So lets think of a doing word maybe like "honk". Now we're not going to pass "honk" in as a parameter we're
// instead going to say "every car thats created automatically gets this method because every car honks". 

// What if we want the cars to honk? So lets turn our "this.honk" into a function and make it so all it does is it says 
// "HOOOOOOOONK" like so:
// EX:
// function Car(make, model, year){
//     this.make = make
//     this.model = model
//     this.year = year
//     this.honk = function(){
//         console.log("HOOOOOOOONK")
//     }
// }
// var jeep = new Car("Jeep", "Cherokee", 1995)
// var mazda = new Car("Mazda", "3 hatchback", "2015")

// Now we're going to make the jeep and mazda honk. Because both of these objects (jeep, mazda) were created with the
// car constructor function they both have a honk method they can use like so:
// EX:
// jeep.honk()
// mazda.honk()

// So now when we run this code we'll see "HOOOOOOOONK" console logged twice.

// While thats nice it's still not nice enough or dynamic enough. There's no way the jeep or the mazda are going to have
// the same honking sound. So let's pass in one more parameter in our function and we'll call it the "honkSound". Then when
// we create the jeep we'll say it's honk sound is "MEEERRRP" and the mazda is "BLAAARP". So now when we say "jeep.honk" we
// want to see "MEEERRRP" and with the "mazda.honk" we want to see "BLAAARP" like so:
// EX:
// function Car(make, model, year, honkSound){
//     this.make = make
//     this.model = model
//     this.year = year
//     this.honk = function(){
//         console.log("HOOOOOOONK")
//     }
// }
// 
// var jeep = new Car("Jeep", "Cherokee", 1995, "MEEERRRP")
// var mazda = new Car("Mazda", "3 hatchback", 2015, "BLAAARP")

// But we can't hard code it in the function because we're only writting it once. Also that the objects need to be able to 
// use them differently as far as the whats the output.

// Let's practice and see if we can figure out how to run the program and not get honk twice. Instead we should be getting 
// it to say "MEEERRRP" for the jeep and "BLAAARP" for the mazda. like so:
// EX: MY RESULT (Incorrect but worked.)
// function Car(make, model, year, honkSound){
//     this.make = make
//     this.model = model
//     this.year = year
//     this.honk = function(){
//         console.log(honkSound)
//     }
// }


// var jeep = new Car("Jeep", "Cherokee", 1995, "MEEERRRP")
// var mazda = new Car("Mazda", "3 hatchback", 2015, "BLAAARP")
 
// jeep.honk()
// mazda.honk()

// What we had to remember is that "this." keyword when we use it in an object it refers to itself and that is even true for
// a Constructor Function. We could say "What ever car you are making refer to it's self when they call this method"

// EX: SCRIMBA RESULT
// So we didn't add this earlier but we would have to go up into our car function and say apply the honkSound to the object
// we're creating so we're gonna give you a honkSound but make sure its added to the object like so:
// EX:
// function Car(make, model, year, honkSound){
//     this.make = make
//     this.model = model
//     this.year = year
//     this.honkSound = honkSound
//     this.honk = function(){
//         console.log("HOOOOOOONK")
//     }
// }


// var jeep = new Car("Jeep", "Cherokee", 1995, "MEEERRRP")
// var mazda = new Car("Mazda", "3 hatchback", 2015, "BLAAARP")
 
// jeep.honk()
// mazda.honk()

// Then we have to change the console log in the car function to say "this.honkSound". Now even though "jeep.honk" and "mazda.honk"
// are calling the same method it's going to give different output depending what we created initially off of this argument aka
// our end input in both our jeep and mazda variables in the parentheses. So now let's hit run to see what we get like so:
//EX:
// function Car(make, model, year, honkSound){
//     this.make = make
//     this.model = model
//     this.year = year
//     this.honkSound = honkSound
//     this.honk = function(){
//         console.log(this.honkSound)
//     }
// }


// var jeep = new Car("Jeep", "Cherokee", 1995, "MEEERRRP")
// var mazda = new Car("Mazda", "3 hatchback", 2015, "BLAAARP")
 
// jeep.honk()
// mazda.honk()

// Sure enough we will see our "MEEERRRP" and "BLAAARP" in the terminal window. But there is one issue with what our car is doing
// right now. The "this.honk" method exists twice in our computers memory when we made a jeep a new honk got created and when we made 
// mazda the new honk got created and added to each object. There is a way around this in javascript it's the appropriate way 
// to add these doing words (The "this.honk" section) and that is to the Constructors Prototype.

// Now if we said/created this "Car.prototype.honk is a function()" it does the same thing. We'll also say/add console log 
// "this.honkSound" then we'll comment out our "this.honkSound" doing word in the car function and now it wont be in our 
// constructor. It's in the constructors prototype and this is super new so don't worry about the ins and outs of whats happening
// just know that we're adding a doing word to the car and its going to work the exact same way like so:
function Car(make, model, year, honkSound){     //Constructor
    this.make = make                            //Constructor
    this.model = model                          //Constructor
    this.year = year                            //Constructor
    this.honkSound = honkSound                  //Constructor
    // this.honk = function(){          //Comment out
    //     console.log(this.honkSound)  //Comment out
    // }                                //Comment out
}

var jeep = new Car("Jeep", "Cherokee", 1995, "MEEERRRP")
var mazda = new Car("Mazda", "3 hatchback", 2015, "BLAAARP")


Car.prototype.honk = function(){ //Add prototype //Prototype function exists once in memory
     console.log(this.honkSound) //Add console log
}
 
jeep.honk()     //Thing that uses the prototype and also gets access to use that function.
mazda.honk()    //Thing that uses the prototype and also gets access to use that function.

// But now this function will only exist once in memory on the prototype and each thing that uses this prototype or constructor
// will get access to use that function. So "jeep.honk" will have access to the prototypes function that pushes each cars
// honk sound that are different from each other.

// Now when we run it again we will get the "MEEERRRP" and "BLAAARP" in the terminal window. 

// So in this essence we've got to think of constructor functions as like a blue print. It is the blue print for what we're
// outputting. Now the constructor portion in this function (The function with all of the "this." properties.) here is more of 
// what it means to be a car and what are the things that define what a car is you know its Make/Model/Year/Sound/How many wheels
// it has/Engine. It's prototype is all the doing words so cars can honk/crash/repaint or whatever. We would add all of those
// to the prototype like this so that every car we created would have access to what it is and what it does.
// EX:
function Car(make, model, year, honkSound, condition){     //Constructor portion is what it means to be a car. Things that define a car.
    this.make = make                            //Constructor-----What it means to be a car. Its prototype is all doing words like down below.
    this.model = model                          //Constructor-----What it means to be a car. Its prototype is all doing words like down below.
    this.year = year                            //Constructor-----What it means to be a car. Its prototype is all doing words like down below.
    this.honkSound = honkSound                  //Constructor-----What it means to be a car. Its prototype is all doing words like down below.
    this.condition = condition
    // this.honk = function(){          //Comment out
    //     console.log(this.honkSound)  //Comment out
    // }                                //Comment out
}

var jeep = new Car("Jeep", "Cherokee", 1995, "MEEERRRP", "crashed") //Added "crashed" to become a prototype doing word.
var mazda = new Car("Mazda", "3 hatchback", 2015, "BLAAARP", "getting repainted") //Added "getting repainted" to become a prototype doing word.


Car.prototype.honk = function(){ //Original Prototype portion is all the doing words so cars can honk/crash/get repainted.
     console.log(this.honkSound) //Add console log
}

Car.prototype.crashed = function(){ //New Prototype portion for the doing word "crashed".
    console.log(this.condition) //Add console log
}



mazda.honk()
jeep.honk()
jeep.crashed()

// Now we'll see that the jeep has crashed in the terminal window.


//-----------------------------------------------------------------------------------------------------

// EXTRA NOTES FROM SCRIMBA:

// Constructor Functions - functions that build objects of the same shape.

// Constructor Functions can be "instantiated" using the "new" keyword to create these objects.

//-----------------------------------------------------------------------------------------------------