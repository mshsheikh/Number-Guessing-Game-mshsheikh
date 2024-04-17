#! /usr/bin/env node
import inquirer from "inquirer";
const randomNum = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userInput",
        type: "number",
        message: "Please enter your number between 1 - 10: "
    }
]);
console.log(answer);
if (answer.userInput === randomNum) {
    console.log("Congratulations! You Won :)");
}
else {
    console.log("Wrong Number, Try Again.");
}
