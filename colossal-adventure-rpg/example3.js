// let hp = 100

// function walk(){
//     const willFight = prompt('(f) for fighting, (i) for checking inventory')
//     if(willWalk === "f"){
//         fight()
//     } else if (willWalk === "i"){
//         checkInventroy()
//     } 
// }

// function fight(){
//     const winner = selectWinner()
// }

// while(hp > 0){
//     walk()
// }



// ### **Project Requirements:**

// 1. Console must greet player with a fun message ✅
// 2. Console must ask for the player's name and store it✅
// 3. Walking:
// - The console will ask the user to enter a "w" to walk🟡
// - Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)✅
// - Use a while loop to control this flow.
// 1. If a wild enemy appears:
// - The enemy is random (can be chosen out of a minimum of 3 different enemy names)✅
// - The user can decide to attack or run✅
// - If attacking, a random amount of damage will be dealt between a min and max✅
// - If running, there will be a 50% chance of escaping✅
// - After the player attacks or runs the enemy attacks back for a random damage amount✅
// - The player and enemy will attack each other in a loop until one of them passes out or dies.✅
// - If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory. After this, the player will continue walking.✅
// - If the enemy kills the player the console prints a cool death message and the game ends✅
// 1. Inventory
// - When the player kills enemies, they are awarded with items✅
// - If the user enters 'Print' or 'p' in the console, the console will print the players name, HP, and each item in their inventory🟡

// const readlineSync = require('readline-sync');
// const name = readlineSync.question("Ahh you're finally awake! What is your name? \n Enter your name here >>>>>>  ");
// readlineSync.question('Welcome to Helgan keep ' + name + ', This is where you will start your journey to find out who you are.\n Press Enter to begin. ');

// const enemies = ['Helgan Guard', 'Empire Guard', 'Storm Cloak'];
// const loots = ['Steel Helmet', 'Steel Shield', 'Light Boots'];
// var prize = [];
// let playerHealth = 20;
// let playerInventory = [];
// const options = ['Walk', 'Print', 'Exit'];

// /////////// FUNCTIONS \\\\\\\\\\

// function walk() {
//     const attackPower = Math.floor(Math.random() * 3 + 3);
//     const enemy = enemies [Math.floor(Math.random() * enemies.length)];
//     let enemiesHealth = 30;
//     const enemiesAttack = Math.floor(Math.random() * (5 - 3) + 2);
//     let pickUp = loots[Math.floor(Math.random() * loots.length)];

//     const index = readlineSync.keyInSelect(options, 'What will you do Dovahhkin?');

//     if (options[index] == 'Exit') {
//         return userHealth = 0;
//     } else if (options[index] == 'Print') {
//         console.log(name + ': \n ' + playerHealth + '\nInventory: ' + playerInventory);
//     } else if (options[index] === 'Walk') {
//         let key = Math.random();
//         if (key < .305) {
//             console.log('Walking around and taking in the scenery of Skyrim.')
//         }
//         else if (key < .705) {
//             console.log('Trinkets, Odds and ends...that sort of things')
//         }
//         else {
//             console.log('*** Combat music kicks in *** ' + enemy + ' stops you and draw his sword!\n What would you like to do? :::')
        

//             while(enemiesHealth > 0 && playerHealth > 0 ) {

//                 const player = readlineSync.question('Enter "r" to run, or enter "a" to attack ::: ');

//                 switch (player) {
//                     case 'r':
//                         const run = Math.random();
//                         if (run < .5) {
//                             console.log("Face me Nord!! " + enemy + " attacked you, causing a damage total of: " + enemiesAttack + " Hit Points.");
//                         } else {
//                             console.log('You ran away successfully. You live to fight another day Dragonborn!');
//                             walk()
//                             break;
//                             // After running away, player need to go back to walking.
//                         }
//                     case 'a':
//                         enemiesHealth -= attackPower;
//                         console.log('You attacked  ' + enemy + ' with ' + attackPower + ' Hit Points.');

//                         playerHealth -= enemiesAttack;
//                         console.log( enemy + ' attacked you with ' + enemiesAttack + ' Hit Points.');

//                         if (enemiesHealth <= 0) {
//                             console.log('FOR SKYRIMMMMMMMMMMMMMMMMMMMMMMM! You defeated ' + enemy + '.\n' + enemy + ' left behind: ' + pickUp ); // needs to randomize loot
//                             let loot = Math.random();
//                             if (loot <= .9) {
//                                 playerInventory.push(pickUp);
//                             }
//                         } else if (playerHealth <= 0) {
//                             console.log(enemy + " has defeated you. You died defending Nord's pride ☠️! You will respawn at the nearest keep.");
//                         }
//                 }
//             }
//         }
//     }
// }

// while(playerHealth > 0) {
//     userRestore = function() {
//         userActive = true;
//         playerHealth = 40;
//     };
//     userRestore();
//     walk();
// }


//----------------------------------------------------------------------------------------------------------------------------
//MY EDITED VERSION TO UNDERSTAND:

const readlineSync = require('readline-sync');
const name = readlineSync.question("Hey!! You awake yet?! Time to go.....ummm bud? Wait what is your name? ");
readlineSync.question('Well if you do not remember we are in Chicago ' + name + '. This may not look bad but it gets worse! Either way this is where we start our journey.\n\n***To continue hit ENTER*** ');

const enemies = ['Zombie', 'Gangsta', 'Rabid Dog'];
const loots = ['Flashlight', 'Compass', 'Map'];
let playerHealth = 20;
let playerInventory = [];
const options = ['Walk', 'Print', 'Exit'];

/////////// FUNCTIONS \\\\\\\\\\
//Walk through the game.
function walk() {
    const attackPower = Math.floor(Math.random() * 3 + 3);
    const enemy = enemies [Math.floor(Math.random() * enemies.length)];
    let enemiesHealth = 30;
    const enemiesAttack = Math.floor(Math.random() * (5 - 3) + 2);
    let pickUp = loots[Math.floor(Math.random() * loots.length)];

    const index = readlineSync.keyInSelect(options, 'What will you do ' + name + '? ');

    if (options[index] == 'Exit') {
        return userHealth = 0;
    } else if (options[index] == 'Print') {
        console.log(name + ': \n ' + playerHealth + '\nInventory: ' + playerInventory);
    } else if (options[index] === 'Walk') {
        let key = Math.random();
        if (key < .5) {
            console.log('Walking around and taking in the scenery of Skyrim.')
        }
        else if (key < .7) {
            console.log('Trinkets, Odds and ends...that sort of things')
        }
//Encounter an enemy.
        else {
            console.log('*** Rustling in the bushes *** ' + enemy + 's comes out of no where!\n What should you do?')
        
//Encounter an enemy.
            while(enemiesHealth > 0 && playerHealth > 0 ) {

                const player = readlineSync.question('Enter "r" to run, or enter "a" to attack but choose wisely: ');

                switch (player) {
                    case 'r':
                        const run = Math.random();
                        if (run < .5) {
                            console.log("Face me Nord!! " + enemy + " attacked you, causing a damage total of: " + enemiesAttack + " Hit Points.");
                        } else {
                            console.log('You ran away successfully. You live to fight another day Dragonborn!');
// Where the character goes back now to the walk function.
                            walk()
                            break;
// After running away, player needs to go back to walking.
                        }
                    case 'a':
                        enemiesHealth -= attackPower;
                        console.log('You attacked  ' + enemy + ' with ' + attackPower + ' Hit Points.');

                        playerHealth -= enemiesAttack;
                        console.log( enemy + ' attacked you with ' + enemiesAttack + ' Hit Points.');

                        if (enemiesHealth <= 0) {
                            console.log('FOR SKYRIMMMMMMMMMMMMMMMMMMMMMMM! You defeated ' + enemy + '.\n' + enemy + ' left behind: ' + pickUp ); // needs to randomize loot
                            let loot = Math.random();
                            if (loot <= .9) {
                                playerInventory.push(pickUp);
                            }
                        } else if (playerHealth <= 0) {
                            console.log(enemy + " has defeated you. You died defending Nord's pride ☠️! You will respawn at the nearest keep.");
                        }
                }
            }
        }
    }
}

while(playerHealth > 0) {
    userRestore = function() {
        userActive = true;
        playerHealth = 45;
    };
    userRestore();
    walk();
}



//******NOTES:******//
// Instead of having functions call themselves we just want 'walk()' to call 'fight()'. Then we want 'fight()' to call
// 'enemy encounter()'. In our example maybe 'walk()' calls 'enemy encounter()' and 'enemy encounter()' calls 'fight()' and 
// 'fight()' calls 'enemy attack()'. EXAMPLE BELOW:
//  #1: 'walk()' calls 'enemy encounter()'
//  #2: 'enemy encounter()' calls 'fight()'
//  #3: 'fight()' calls 'enemy attack()'

// Building that stack is ok as long as its in that linear way where functions in the stack arent calling functions that were
// previously in the stack before they are resolved. 

// Q: So how do we create that flow? How do we make our game loop?
// A: The way we do it in this instance is one of the few times we'll use a 'while()' loop.

//******STACKOVERFLOW NOTES:******//
// Yes, Math.random() is an excellent way to accomplish this. What you want to do is compute a single random number, and then make decisions based on that:

// var d = Math.random();
// if (d < 0.5)
//     // 50% chance of being here
// else if (d < 0.7)
//     // 20% chance of being here
// else
//     // 30% chance of being here
//
//
//
//
//
//
//
//
//

//----------------------------------------------------------------------------------------------------------------------------
// //ANOTHER EXAMPLE BUT USES TO MANY FUNCTIONS. ALSO UNDERSTANDING IT.
// console.log("Welcome to the Colossal adventure!");


// //Your info
// const readline = require("readline-sync");
// const name = readline.question("What is your name? ");

// let yourInfo = {
//     yourName: name,
//     hp: 135,
//     inventory: [],
//     enemiesKilled: [],
// }


// //Instructions
// console.log(name + ", thank you for joining.");
// console.log("You only have 100 HP; however, each enemy has a different amount.");
// console.log("If you kill an enemy you will gain HP.");
// console.log("Type 'Print' into the console at any time to see your: name, HP, and inventory.");


// //Enemy info
// let jo = {
//     name: "Jo", 
//     hp: 55, 
//     inventoryItem: "Sword", 
//     hpDeathBonus: 253,
// }

// let bob = {
//     name: "Bob", 
//     hp: 139, 
//     inventoryItem: "Noodle", 
//     hpDeathBonus: 769,
// }

// let annie = {
//     name: "Annie",
//     hp: 1000,
//     inventoryItem: "Colt 1911!",
//     hpDeathBonus: 10000,
// }

// let enemies = [jo, bob, annie]
// let filteredEnemies = enemies
// let encounteredEnemy = enemies[0]


// //Chooses what enemy if an enemy is encountered
// function chooseEnemyToEncounter() {
//     let randomIndex = Math.floor(Math.random() * filteredEnemies.length)
//     return filteredEnemies[randomIndex]
// }


// //Allows us to keep calling the walk function
// while (yourInfo.hp > 0) {
//     walk()
// }


// //Our primary function
// function walk() {
//     const walk = readline.question("Please press 'w' to walK. ")
//     if(walk === "w") {
//         var number = Math.floor(Math.random() * 4)
//         if (number === 1) {
//             encounteredEnemy = chooseEnemyToEncounter()
//             console.log(encounteredEnemy.name + " appeard")
//             //attackOrRun()
//             battle()
//         } else {
//             console.log("Keep Walking")   
//         }
//     } else if (walk === "Print") {
//         console.log("Your name: " + name + ", HP: " + yourInfo.hp + "," + " Your inventory: " + yourInfo.inventory.join(", ") + " You have killed: " + yourInfo.enemiesKilled.join(", "))
//     } else {
//         console.log("Please follow the instructions.")
//     }
// }


// //Allows us to continue the battle based on specific inputs
// function battle() {
//     while (encounteredEnemy.hp > 0) { 
//         let decision = readline.question("Would you like to attack or run? (Please type your response.) ")
//         if (decision === "run") {
//             var randomChance = Math.floor(Math.random() * 2)
//             if (randomChance === "0") {
//                 attack()
//             } else {
//                 damageToEnemy()
//                 console.log("You escaped! Keep walking.")
//             }
//         } else if (decision === "attack") {
//             attack()
//         } else if (decision === "Print") {
//             console.log("Your name: " + name + ", HP: " + yourInfo.hp + "," + " Your inventory: " + yourInfo.inventory.join(", ") + " You have killed: " + yourInfo.enemiesKilled.join(", "))
//         } else {
//             console.log("Please follow the instructions.")
//         }
//         if (encounteredEnemy.hp === 0 || decision === "run") {
//             break
//         }
//     }
// }


// //If attack is chosen
// function attack() {
//     console.log("You chose to attack")
//     damageToYou()
//     damageToEnemy()
// }


// //Determines friendly damage
// function damageToYou() {
//     let damagePoints = Math.floor(Math.random() * 145)
//     console.log(name + ", you just dealt " + damagePoints + " point(s) of damage to " + encounteredEnemy.name + ".")
//     encounteredEnemy.hp = (encounteredEnemy.hp - damagePoints)
//     enemyDied()
// }


// //Determines enemy damage
// function damageToEnemy() {
//     if (encounteredEnemy.hp > 0) {
//         let damagePoints = Math.floor(Math.random() * 145)
//         console.log(encounteredEnemy.name + " just dealt " + damagePoints + " point(s) of damage to you.")
//         yourInfo.hp = (yourInfo.hp - damagePoints)
//         youDied()
//     }
// }


// //Ends the script if you died
// function youDied () {
//     if (yourInfo.hp <= 0) {
//         console.log("You just died. Go pitty yourself and then try again.")
//         process.exit(-1)    
//     }
// }


// //Function for if the enemy is killed
// function enemyDied() {
//     if (encounteredEnemy.hp <= 0) {
//         console.log("You just killed " + encounteredEnemy.name + " good job! Please continue on your adventure.")
//         yourInfo.hp = (yourInfo.hp + encounteredEnemy.hpDeathBonus)
//         yourInfo["inventory"].push(encounteredEnemy.inventoryItem)
//         yourInfo["enemiesKilled"].push(encounteredEnemy.name)
//         filteredEnemies = enemies.filter(enemy => enemy.hp > 0)
//         youWon()
//     }
// }


// //Ends the game if you win
// function youWon() {
//     if (filteredEnemies.length === 0) {
//         console.log("You won the game, go have a beer and celebrate!")
//         process.exit(-1) 
//     }
// }


// walk()