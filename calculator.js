/*
Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
*/

const calc = (x, y, operator) => {
    if (typeof x && typeof y !== "number") return "please enter a valide number"
    let sum = 0;
    switch (operator) {
        case "+":
            sum = x + y
            break;
        case "-":
            sum = x - y
            break;
        case "*":
            return x * y
        case "/":
            sum = x / y
            break;
        default:
            console.log("Please enter valid input");
            break;
    }

    return sum;
}

console.log(calc(30, 6, "/"));