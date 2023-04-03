const readlineSync = require('readline-sync');

const enemies = ['Break Dancing Zombie', 'Gangsta Florist', 'Rabid Dog (selling mix tapes)', 'Student', 'Florida Man'];

const rewards = ['Compass', 'Minecraft special edition Disk', 'Cast Iron Skillet', 'Box of Insult Band-Aids']


const playerName = readlineSync.question("Woah what are you doing up in the mountains so high? Whats your name?\t");
readlineSync.question("Hello " + playerName + ", Welcome to Narnia! Home of the homeless and scary stuff!\n\t**Hit the ENTER key to Continue:** ")
readlineSync.question("If adventure is what you're looking for look no further buddy :D\n\t**Hit the ENTER key to Continue:** ")

var playerHealth = 50
var playerInventory = []


while(playerHealth > 0){
    // console.log("Press 'w' to WALK or press 'p' to check status:")
    var playerAction = readlineSync.question("Press 'w' to WALK or press 'p' to CHECK STATUS:")
    if(playerAction == 'w'){
        walk()
    }
    if(playerAction == 'p' || playerAction == "print"){
        printStatus(null,null)
    }
}

console.log("***GAME OVER***")

function walk(){
    // * New line character: '\n' *\\
    // console.log("\nU done chose to walk\n")
    var rand = Math.random()
    //25% chance player is ATTACKED.
    if(rand < .25){//TODO reduced to .25 // FINISHED BUT LEFT THE todo on there for future reference. 25% chance.
        attack()
    }
    else if(rand < .50){//TODO reduced to .25 // FINISHED BUT LEFT THE todo on there for future reference.
        console.log("You continue to walk.")    // 25% chance
    }else if(rand < .75){ // 25% chance
        console.log("You heard something weird but eh no biggie.")
    }else if(rand < 95){ // 20% chance
        console.log("Good Morning Starshine The Earth Says Hello!")
    }else{ //Last 5%.
        console.log("You found a New PLAYSTATION 3 with some new drip!")
        playerInventory.push("PLAYSTATION TRES")
    }
}

/**
 * Attack function used to control battle with the player and enemy.
 * @returns null when the attack phase is over.
 */
function attack(){
                                //
    var enemyIndex = Math.floor(Math.random() * enemies.length) ///MAKE SURE TO UNDERSTAND>
    var enemyName = enemies[enemyIndex]     ///MAKE SURE TO UNDERSTAND>

    console.log("\n"+playerName + ", you've been ATTACKED by a wild " + enemyName + ". What would you like to do??")
    // playerHealth = playerHealth - 15
    enemyHealth = 25
    //CONTINUE BATTLE TILL EITHER THE PLAYER OR ENEMY DIE.
    while(playerHealth > 0 && enemyHealth > 0){
        var underAttactAction = readlineSync.question("\nWould you like to run (r) or attack (a) or check your status (p)? ")
                                    // || means or.
        if(underAttactAction == 'p' || underAttactAction == "print"){
            printStatus(enemyHealth, enemyName);
            continue;  //Ends the turn before we get attacked and back to the while().
        }
        if(underAttactAction == 'r'){
            if(Math.random() < .5){
                console.log("You successfully got away from the " + enemyName + ".")
                return  //Goes back to where attack was called in the walk() function.
            }
            console.log("You failed to run away!!")
        }
        //PLAYER CHOOSE TO ATTACK:
        else if(underAttactAction == 'a'){
            var damageDealt = (2 + Math.random() * 3)
            enemyHealth = enemyHealth - damageDealt
            // enemyHealth -= damageDealt Works the same as above or do += to add.
            console.log("\nYou've attacked and the enemy took " + damageDealt.toFixed(2) + " point in damage.")
        }
        //PLAYER DEFEATED ENEMY:
        if(enemyHealth < 0){
            console.log("\nCongrats you've done it! You've been restored to full health and killed the " + enemyName + " :D")
            playerHealth = 30
            var itemEarnedIndex = Math.floor(Math.random() * rewards.length)
            var item = rewards[itemEarnedIndex]
            console.log("Woah you've earned/found a" + item + ". Freaking sick bro!")
            playerInventory.push(item)
            return      //Ends the battle and keeps the player from getting attacked.
        }

        //Enemy ATTACKS player.      //(lowest + 0-.99 * highest minus lowest)
        var damageDealt = (2 + Math.random() * 3)
        playerHealth = playerHealth - damageDealt           //toFixed is to rounds the number down to 2 decibel places. Display it cleaner.
        console.log("You've been hit and received " +  damageDealt.toFixed(2) + " points of damage.")
    }
    if(playerHealth <= 0){
        console.log("Ohhhhhh.... you dead.")
    }
}

//Didn't make it where when running we would get attacked because it didn't make sense and I'm going off of pokemon rules.

///TODO means what it sounds like!
/**
 * Function to print current status including enemy/player health/inventory.
 * @param {*} enemiesHealth Current health of the enemy in battle. Null when not in battle.
 * @param {*} enemyName Name of current enemy in battle. Null when not in battle.
 */
function printStatus(enemiesHealth, enemyName){
    console.log("Your health is " + playerHealth.toFixed(2))
    if(enemiesHealth != null && enemyName != null){       //!= means not equal.
        console.log("The " + enemyName + "'s health is " + enemiesHealth.toFixed(2) + ". ")
    }
    console.log("Inventory")
    for(var i = 0; i < playerInventory.length; i++){
        // \t is tab.
        console.log("\t" + playerInventory[i])
    }
}
//------------------------------------------------------------------------------------------------------------------------------//
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