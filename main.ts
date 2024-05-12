#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
import figlet from "figlet";
// import chalkAnimation from "chalk-animation"

// ----------------------figlet -------------------------------

console.log(chalk.magentaBright(figlet.textSync("Life  &  Death  Game")));


//-----class of player-----
class Player {
    name: string;
    fuel: number;

    //----------constructor of player-------------------
    constructor(name: string, fuel: number) {
        this.name = name;
        this.fuel = fuel;

    }

    // --------function of fuelDecrease()----------- 
    fuelDecrease() {
        let fuel: number = this.fuel - 25;
        this.fuel = fuel;
    }
    //--------function of fuelDecrease()----------- 
    fuelIncrease() {
        let fuel: number = this.fuel + 25;
        this.fuel = fuel;
    }
}

//----------class of opponent-----------
class Opponent {
    name: string;
    fuel: number;

    //----------constructor of player-------------------
    constructor(name: string, fuel: number) {
        this.name = name;
        this.fuel = fuel;

    }

    // --------function of fuelDecrease()----------- 
    fuelDecrease() {
        let fuel: number = this.fuel - 25;

    }

}

/****************  _Player _***********************/
/***************************************************/
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "\n\nEnter your Name (player): ",
        validate: function (resist) {
            if (resist.trim() !== "") {
                return true;
            }
            return "Plese complete the instruction and then keep going further.";
        },
    }])

/****************  _Opponent _***********************/
/***************************************************/
let opponent = await inquirer.prompt({
    name: "select",
    type: "list",
    message: "\nSelect Your Opponent",
    choices: ["🧌  Goblin_Monsters", "🥷️  Ninja_fighter", "🧜🏻‍♂️ Mermaid_King", "🚶🏼 Exit"]
})

/*************************************************/
//Information
let player1: any = new Player(player.name, 75);
let opponent1: any = new Player(opponent.select, 75);


let game = true;
while (true) {

    /************ Goblin_Monsters *****************/
    if (opponent.select === "🧌  Goblin_Monsters") {
        let ask = await inquirer.prompt([{
            name: "opt",
            type: "list",
            message: "\n\nSelect Your Movements (o<o)",
            choices: ["Sword_Attack", "Life increase Portion", "Run Back to Home (Exit)"],
        }
        ]);


        if (ask.opt === "Sword_Attack") {  //---------------------1st if------sword attact if--

            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                player1.fuelDecrease()
                console.log(`${chalk.bold.hex(`#63C33B`)(player1.name)} attack ⚔️⚔️⚔️⚔️ ⚔️⚔️⚔️⚔️  your strength_fuel is ${player1.fuel} `);
                console.log(`${chalk.bold.hex(`#F62A78`)(opponent1.name)} attack 🏌️🏌️🏌️  emeny strength_fuel is ${opponent1.fuel}  `);

                if (player1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("🙅️🙅️ Baby you lose 🤦️🤦️ , Better luck Next_time 🥹️🥹️🥹️🥹️🥹️"));
                    console.log(chalk.bold.italic.greenBright(`🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️`));
                }
            }

            if (num <= 0) {
                opponent1.fuelDecrease()                            //------Fuel_deccrease--opponent1 function ()--------
                console.log(`${chalk.bold.hex(`#63C33B`)(player1.name)} your strength_fuel is ${player1.fuel} `);
                console.log(`${chalk.bold.hex(`#F62A78`)(opponent1.name)} enemy strength_fuel is ${opponent1.fuel} `);

                if (opponent1.fuel <= 0) {
                    console.log(`🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️  You Win 🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️`);
                    process.exit();

                }
            }
        }

        if (ask.opt === "Life increase Portion") {   //----------2nd if---------life portion if-------
            player1.fuelIncrease(+50);                                 //------Fuel_increase--player1 function ()------
            console.log(chalk.bold.italic.green(`'You Drink Life increase Portion 🫀, Your Power (fuel) is ${player1.fuel} 💪️💪️💪️💪️💪️💪️💪️'`));
        }

        if (ask.opt === "Run Back to Home (Exit)") {    //---------3rd if---------------run home if-------
            console.log(chalk.red.bold.italic("🙅️🥹️🥹️ no baby, 🤦‍♂️ shame shame ... 🥹️🥹️🙅️"));
            process.exit();
        }
    }

    if (opponent.select === "🥷️  Ninja_fighter") {
        let ask = await inquirer.prompt([{
            type: "list",
            name: "opt",
            message: "\n\nSelect Your Movements (o<o)",
            choices: ["Sword_Attack", "Life increase Portion", "Run Back to Home (Exit)"],
        }
        ]);


        if (ask.opt === "Sword_Attack") {  //---------------------1st if------sword attact if--

            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                player1.fuelDecrease()
                console.log(`${chalk.bold.hex(`#63C33B`)(player1.name)} attack ⚔️⚔️⚔️⚔️ ⚔️⚔️⚔️⚔️  your strength_fuel is ${player1.fuel} `);
                console.log(`${chalk.bold.hex(`#F62A78`)(opponent1.name)} attack 🏌️🏌️🏌️  emeny strength_fuel is ${opponent1.fuel}  `);

                if (player1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("🙅️🙅️ Baby you lose 🤦️🤦️ , Better luck Next_time 🥹️🥹️🥹️🥹️🥹️"));
                    console.log(chalk.bold.italic.greenBright(`🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️`));
                }
            }

            if (num <= 0) {
                opponent1.fuelDecrease()                            //------Fuel_deccrease--opponent1 function ()--------
                console.log(`${chalk.bold.hex(`#63C33B`)(player1.name)} your strength_fuel is ${player1.fuel} `);
                console.log(`${chalk.bold.hex(`#F62A78`)(opponent1.name)} enemy strength_fuel is ${opponent1.fuel} `);

                if (opponent1.fuel <= 0) {
                    console.log(`🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️  You Win 🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️`);
                    process.exit();

                }
            }
        }

        if (ask.opt === "Life increase Portion") {   //----------2nd if---------life portion if-------
            player1.fuelIncrease(+50);                                 //------Fuel_increase--player1 function ()------
            console.log(chalk.bold.italic.green(`'You Drink Life increase Portion 🫀, Your Power (fuel) is ${player1.fuel} 💪️💪️💪️💪️💪️💪️💪️'`));
        }

        if (ask.opt === "Run Back to Home (Exit)") {    //---------3rd if---------------run home if-------
            console.log(chalk.red.bold.italic("🙅️🥹️🥹️ no baby, 🤦‍♂️ shame shame ... 🥹️🥹️🙅️"));
            process.exit();
        }
    }

    if (opponent.select === "🧜🏻‍♂️ Mermaid_King") {
        let ask = await inquirer.prompt([{
            type: "list",
            name: "opt",
            message: "\n\nSelect Your Movements (o<o)",
            choices: ["Sword_Attack", "Life increase Portion", "Run Back to Home (Exit)"],
        }
        ]);


        if (ask.opt === "Sword_Attack") {  //---------------------1st if------sword attact if--

            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                player1.fuelDecrease()
                console.log(`${chalk.bold.hex(`#63C33B`)(player1.name)} attack ⚔️⚔️⚔️⚔️ ⚔️⚔️⚔️⚔️  your strength_fuel is ${player1.fuel} `);
                console.log(`${chalk.bold.hex(`#F62A78`)(opponent1.name)} attack 🏌️🏌️🏌️  emeny strength_fuel is ${opponent1.fuel}  `);

                if (player1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("🙅️🙅️ Baby you lose 🤦️🤦️ , Better luck Next_time 🥹️🥹️🥹️🥹️🥹️"));
                    console.log(chalk.bold.italic.greenBright(`🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️🤬️`));
                }
            }

            if (num <= 0) {
                opponent1.fuelDecrease()                            //------Fuel_deccrease--opponent1 function ()--------
                console.log(`${chalk.bold.hex(`#63C33B`)(player1.name)} your strength_fuel is ${player1.fuel} `);
                console.log(`${chalk.bold.hex(`#F62A78`)(opponent1.name)} enemy strength_fuel is ${opponent1.fuel} `);

                if (opponent1.fuel <= 0) {
                    console.log(`🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️  You Win 🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️🥳️`);
                    process.exit();

                }
            }
        }

        if (ask.opt === "Life increase Portion") {   //----------2nd if---------life portion if-------
            player1.fuelIncrease(+50);                                 //------Fuel_increase--player1 function ()------
            console.log(chalk.bold.italic.green(`'You Drink Life increase Portion 🫀, Your Power (fuel) is ${player1.fuel} 💪️💪️💪️💪️💪️💪️💪️'`));
        }

        if (ask.opt === "Run Back to Home (Exit)") {    //---------3rd if---------------run home if-------
            console.log(chalk.red.bold.italic("🙅️🥹️🥹️ no baby, 🤦‍♂️ shame shame ... 🥹️🥹️🙅️"));
            process.exit();
        }
        
    }

    if (opponent.select === "🚶🏼 Exit") {
        game = false;
        process.exit();
    }
}