import inquirer from "inquirer";
const bmi = await inquirer.prompt([
    {
        name : "weight" ,
        type : "string", 
        message:"Enter your weight in kg?"},

    {
        name : "height",
        type : "string", 
        message:"Enter your height in meters?"
    }
])
let BMI = bmi.weight/(bmi.height * bmi.height)

console.log(`Your bmi is ${BMI}`);
