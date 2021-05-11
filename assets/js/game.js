var playerInfo = {
    name: window.prompt("what is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
};


//function to generate a random number value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (60 - 40 + 1)) + 40;

    return value;
};

//SHOP FUNCTION!!!!
var shop = function() {
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    return shopOptionPrompt;
};
//FIGHT FUNCTION!!!
var fight = function(enemyName) {
    while (playerInfo.health > 0 && enemyHealth > 0) {
        //Asking player if they would like to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + 'has decided to skip this fight. Goodbye!');
                //subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log('playerInfo.money', playerInfo.money);
                break;
            }
        }
        //remove enemy's health by subtracting the amount set in the playerInfo.attack variable
        enemyHealth = randomNumber();
        console.log(
            playerInfo.name + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.');
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            //award player money for winning
            playerInfo.money = playerInfo.money + 20;
            //leave while () loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        //generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemyHealth = Math.max(0, enemyHealth - damage);
        console.log(
            enemyName + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + "health remaining."
        );
        //check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            //leave while the () loop if player is dead
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
        //remove player's health by subtracting amount set in enemy attack variable
        var damage = randomNumber(enemyAttack - 3, enemyAttack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);
    }
};
// fight each enemy-robot by looping over them and fighting them one at a time
for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerInfo.health > 0) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];
        // reset enemyHealth before starting new fight
        enemyHealth = 50;
        // use debugger to pause script from running and check what's going on at that moment in the code
        // debugger;
        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);
    }
    //if player is still alive and we're not the last enemy in the array
    if (playerInfo.health > 0 && i < enemyNames.length - 1) {
        //ask if player wants to use the store before next round
        var storeConfirm = window.confirm('The fight is over, visit the store before the next round?');
        //if yes, take them to the store() function
        if (storeConfirm) {
            shop();
        }
    }
    // if player isn't alive, stop the game
    else {
        window.alert('You have lost your robot in battle! Game Over!');
        break;
    }
}
var players = []
for (var p in players) {
    p.printName()
}
//FUNCTION TO START A NEW GAME!!!
var startGame = function() {
    //reset player stats
    playerInfo.health = 100;
    playerInfo.attack = 10;
    playerInfo.money = 10;
    // other logic remains the same...
    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
        } else {
            window.alert("You have lost your robot in battle! Game over!");
            break;
        }
        //start the game when the page loads
    }
    fight(pickedEnemyName);
    //if we're not at the last enemy in the array
    if (i < enemyInfo.length - 1) {
        shop();
    }
    //play again
    //startGame();
    endGame();
};

//SHOP FUNCTION!!!
var shopOptionPrompt = shop();
//use switch to carry out action
switch (shopOptionPrompt) {
    case "REFILL": //new case
    case "refill":
        if (playerInfo.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            //increase health and decrease money
            playerInfo.health = playerInfo.health + 20;
            playerInfo.money = playerInfo.money - 7;
        } else {
            window.alert("You dont have enough money!");
        }
        break;
    case "upgrade":
    case "UPGRADE": //new case
        if (playerInfo.money >= 7) {
            window.alert("Upgrading player's attack by 6 or 7 dollars.");
            //increase attack and decrease money
            playerInfo.attack = PlayerInfo.attack + 6;
            playerInfo.money = playerInfo.money - 7;
        } else {
            window.alert("You dont have enough money!");
        }
        break;
    case "LEAVE": //new case
    case "leave":
        window.alert("Leaving the store.");
        //do nothing, so function will end
        break;
    default:
        window.alert("you did not pick a valid option. Try again.");
        //call shop() again to force player to pick a valid option
        shop();
        break;
}

//END GAME FUNCTIONS!!! 
console.log("enter the shop");
//function to end the entire game
var endGame = function() {
    //if player is still alive, player wins!
    if (playerInfo.health > 9) {
        window.alert("Great job, you've survived the game! You now have score of " +
            playerInfo.money + ".");
    } else {
        window.alert("You've lost your robot in the battle.");
    }
};
//ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");
if (playAgainConfirm) {
    //restore the game
    startGame();
} else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
window.alert("Thank you for playing Robot Gladiators! Come back soon!");

var enemyInfo = [{
        name: "Roborto",
        attack: 12
    },
    {
        name: "Amy Android ",
        attack: 13
    },
    {
        name: "Robo Trumble",
        attack: 14
    }
];