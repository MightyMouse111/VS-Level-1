//Part 1: Loop through the following array and count how many "computers" there are. Log the final count.

//Array of items
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

//Zero being equal to "count" as a starting point
var count = 0;

//For loop start
    for (var i = 0; i < officeItems.length; i++){
//If statement start where officeItems item variable is equal to "computer". 
//Meaning if the items value is the same as "computer" it will only then move to the next command.
        if(officeItems[i] === "computer"){
//We want to count each repeated item starting from the number 0 until there is no more items.
            count++;
        }
    }
//Then we console log the results of how many times its counted the text "computer"
      console.log ("Computer: " + count);

//This works as well but is not a for loop:
//var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
//console.log((officeItems.filter(x => x === "computer")).length)

/////////////////////////////////////////PAGE BREAK//////////////////////////////////////////////////////////////

//Part 2:Loop through the following array and log to the console "old enough" if they are 18 or older, 
//                                                           and "not old enough" if they aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "HIM"
    },{
      name: "Madeline",
      age: 80,
      gender: "SHE"
    },{
      name: "Cheryl",
      age: 22,
      gender: "SHE"
    },{
      name: "Sam",
      age: 30,
      gender: "HE"
    },{
      name: "Suzy",
      age: 4,
      gender: "HER"
    }
  ]
 //Referenced the "Arrays + Loops" story point 44.5 @2 mins 33 sec.
      for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){


        //WORKS 100% ONLY IF we delete the console log line above the if statement but dont use it.

        //     console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + peopleWhoWantToSeeMadMaxFuryRoad[i].age + " years old")
      // if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
      // console.log("Old enough")        
      // }else{
      //     console.log("Not old enough")
      // }
      // }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //WORKS 100% w/out the 3 bonus challenges.
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log("My name's " + peopleWhoWantToSeeMadMaxFuryRoad[i].name + ", I'm " + peopleWhoWantToSeeMadMaxFuryRoad[i].age + "." + " I am old enough.")        
        }else{
            console.log("My name's " + peopleWhoWantToSeeMadMaxFuryRoad[i].name + ", I'm " + peopleWhoWantToSeeMadMaxFuryRoad[i].age + "." + " I am not old enough.")
        }
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //WORKS 100% with the first 1/3 of the challenges. This has 2 small challenges within.

      //Small challenge pt. 1 == WORKS 100%
        // if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        //   console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max.")        
        //   }else{
        //       console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max.")
        //   }
        //   }

      //Small challenge pt. 2 == WORKS 100%
      // if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
      //   console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. " + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " is good to see Mad Max Fury Road.")        
      //   }else{
      //       console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let " + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " in.")
      //   }
      // }
    //////

      