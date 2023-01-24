///////////////MY METHOD:///////////////

var readlineSync = require('readline-sync');
var test = readlineSync.question('Woah why am I in this room? ')


if (readlineSync.keyInYN('Maybe I should get up and work on leaving. ')) {
  // 'Y' key was pressed.
  // Do something...
  if (readlineSync.keyInYN('Well the door wont budge so maybe there is a key somewhere. Maybe I should check in the mysterious hole? ')) {
    readlineSync.question('Why not!')
    readlineSync.question('*DEATH*')
    
  } else {
    readlineSync.question('That hole looks like bad news, so maybe Ill look around the room and try to find a key! :D ')
    if (readlineSync.keyInYN('I found a cloth under the bed with a key wrapped up inside it! Should I try it on the lock? ')) {
        readlineSync.question('Woah it worked but I wonder what was in the hole in the room and why I was in there? Never mind Im going home. ')
        readlineSync.question('*FREEDOM*')
      } else {
        readlineSync.question('The only other thing I can do is check that mysterious hole now. ')
        readlineSync.question('(Shuffles to the floor and sticks hand in the hole.)')
        readlineSync.question('Thats weird there is nothing in the hole.. Hmmm.. ')
        readlineSync.question('(A trap has sprung and your hand is stuck now. The room has started playing music.)')
        readlineSync.question('What?! Why cant I get out of this and why is Rick Astleys Never Gonna Give You Up playing?!')
        readlineSync.question('(Rick Astley enters the room as the FINAL BOSS)')
        readlineSync.question('Oh my gods is that RICK?! AHHHHHHHH!!!!')
        readlineSync.question('(Player screams and the music stops.)')
        readlineSync.question('*NEVER GONNA GIVE YOU DEATH! LOL JUST KIDDIIIIING*')
        readlineSync.question('*EXTRA DEAD*')
      }

  }
  // 'N' key was pressed.
  // Do something...  
} else {

  console.log('Nah Ill stick around and sleep yolo :D');
  console.log('*DEATH*')

}

// console.log(readlineSync) 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////NYJIA'S METHOD:///////////////
// const readlineSync = require("readline-sync");   
// const options = ['hole', 'key', 'door']

// let isAlive = true
// const index = readlineSync.keyInSelect (options, 'You are stuck in a room and have three options: put your hand in the hole, find the key, or open the door. ');

// while (isAlive === true) {
//     if(options[index]==='hole'){
//     console.log ('You stuck your hand into the hole and felt a sharp pain in your palm. You immediately pulled your hand out to see that you were bitten by a snake. Stuck in the room and unable to receive medical attention, you died. ')
 
//     isAlive=false

//     } else if(options[index]==='key') {
//         console.log ('You searched every area of the room, until you spot a piece of metal hidden under a rug. Picking up the small object, you noticed it was the key.')
//         const index2 = readlineSync.keyInYN ('You have found the key. Do you want to escape? ')
//         if(index2===true) {
//             console.log("The door is open. You have escaped. ")
//         break
//         }  else {
//             isAlive=false
//              console.log('You made the foolish decision to not escape the room and you, eventually, died. ')
         
//             }
        
//     } else if(options[index]==="door") {
//         console.log ('You tried to open the door without the key. You remained trapped in the room and died.')
//         break
//     }
// }
// console.log(options[index]);