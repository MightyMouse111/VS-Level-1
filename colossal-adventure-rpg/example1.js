var battling = true;
var playerHp = 20;
var enemyHp = 100;

//Player's Attack Turn
var playerTurn = function(){
    var playerAccuracy = Math.floor(Math.random()* 3 + 1);
    var playerAttackDamage = Math.floor(Math.random()* 20 + 1);

    if(playerAccuracy > 1){
        enemyHp -= playerAttackDamage;
        console.log("Your attack hits.  Bahamut suffers"+" "+playerAttackDamage+" "+"damage!\nCloud:"+" "+playerHp+"HP\nBahamut:"+" "+enemyHp+"HP");
    }else{
        console.log("Your attack missed!");
    }
};

//Enemy's Attack Turn
var enemyTurn = function(){
    var enemyAccuracy = Math.floor(Math.random()* 5 + 1);
    var enemyAttackDamage = Math.floor(Math.random()* 5 + 1);

    if(enemyAccuracy > 3){
        playerHp -= enemyAttackDamage;
        console.log("Bahamut attacks!  You suffer"+" "+enemyAttackDamage+" "+"damage!\nCloud:"+" "+playerHp+"HP\nBahamut:"+" "+enemyHp+"HP");
    }else{
        console.log("Bahamut misses!");
    }
};

var battle = function(){
    console.log("Battle Start!");
    while(battling){
        playerTurn();
        if(enemyHp <= 0){
            console.log("Victory!");
            battling = false;
        }
        if(enemyHp > 0){
        enemyTurn();
           if(playerHp <= 0){
               console.log("Defeat!");
               battling = false;
           }
        }
    }
};
battle();