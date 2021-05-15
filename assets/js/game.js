//hi

//function to generate a random number value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (60 - 40 + 1)) + 40;

    return value;
};

//FIGHT FUNCTION!!!
var fight = function(enemy) {
    while (playerInfo.health > 0 && enemy.health > 0) {
        //Asking player if they would like to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //Cconfirm player wants to skip 
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes(true), leave fight
            if (confirmSkip) {
                window.alert(playerName + ' has decided to skip this fight. Goodbye!');
                //subtract money from playerMoney for skipping 
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money)
                break;
            }
        }

        //generate random damage value based on player's attack power
        var damage = randomNumber(PlayerInfo.attack - 3, playerInfo.attack);

        //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerName + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
        );
        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");

            //award player money for winning
            playerInfo.money = playerInfo.money + 20;

            //leave while () loop since enemy is dead
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        //remove player's health by subtracting amount set in enemy attack variable
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);

        console.log(
            enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
        );

        //check players health
        if (playerInfo.health <= 0) {
            //let player know what round they are in, remember that the arrays start at 0 so it needs to have 1 added to it
            window.alert(playerInfo.name + 'has died!');
            break;
        } else {
            window.alert(playerInfo.name + ' still has ' + PlayerInfo.health + 'health left.');
        }
    }
};

//FUNCTION TO START A NEW GAME!!!
var startGame = function() {
    // reset player stats
    playerInfo.reset();

    // fight each enemy robot by looping over them and fighting them one at a time
    for (var i = 0; i < enemyInfo.length; i++) {
        // if player is still alive, keep fight next enemy
        if (playerInfo.health > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

            // pick new enemy to fight based on the index of the enemyInfo array
            var pickedEnemyObj = enemyInfo[i];

            // set health for picked enemy
            pickedEnemyObj.health = randomNumber(40, 60);

            // pass the pickedEnemyObj object variable's value into the fight function, where it will assume the value of the enemy parameter
            fight(pickedEnemyObj);

            // if player is still alive and we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                // ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                // if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
        }

        //if player is not alive, break out of the loop and let endGame function run
        else {
            window.alert("You have lost your robot in battle! Game over!");
            break;
        }
    }

    //after loop ends, we are either out of player.health or enemies to fight, so run the endGame function
    endGame();
};


//function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    //if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in the battle.");
    }

    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

//SHOP FUNCTION!!!
var shopOptionPrompt = window.prompt(
    'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
);
//use switch to carry out action
switch (shopOptionPrompt) {
    case "REFILL": //new case
    case "refill":
        playerInfo.refillHealth();
        break;
    case "UPGRADE":
    case "upgrade": //new case
        playerInfo.upgradeAttack();
        break;
    case "LEAVE": //new case
    case "leave":
        window.alert("Leaving the store.");
        break;
    default:
        window.alert("you did not pick a valid option. Try again.");
        shop();
        break;
};

//END GAME FUNCTIONS!!! 
//function to end the entire game
var playerInfo = {
    name: window.prompt("what is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling this player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You dont have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 ot 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enought money!");
        }
    }
};

//enemy info
var enemyInfo = [{
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android ",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);
//END GAME
startGame();