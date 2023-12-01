let firstNumber = prompt("Enter the first number:");
let secondNumber = prompt("Enter the second number:");

// Convert the input strings to numbers
let num1 = parseFloat(firstNumber);
let num2 = parseFloat(secondNumber);

// Check if the conversion was successful
if (!isNaN(num1) && !isNaN(num2)) {
  let sum = num1 + num2;
  console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);
} else {
  console.log("Invalid input. Please enter valid numbers.");
}
