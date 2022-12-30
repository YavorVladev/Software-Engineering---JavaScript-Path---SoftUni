function solve(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let operator = input[2];
    let outcome = 0
    let even_odd = ""
    let result = ""

    switch (operator) {
        case "+":
            outcome = a + b
            if (outcome % 2 == 0) {
                even_odd = "even"
                result = `${a} ${operator} ${b} = ${outcome} - ${even_odd}`; break;

            } else {
                even_odd = "odd"
                result = `${a} ${operator} ${b} = ${outcome} - ${even_odd}`; break;
            }

        case "-":
            outcome = a - b
            if (outcome % 2 == 0) {
                even_odd = "even"
                result = `${a} ${operator} ${b} = ${outcome} - ${even_odd}`; break;

            } else {
                even_odd = "odd"
                result = `${a} ${operator} ${b} = ${outcome} - ${even_odd}`; break;
            }

        case "*":
            outcome = a * b
            if (outcome % 2 == 0) {
                even_odd = "even"
                result = `${a} ${operator} ${b} = ${outcome} - ${even_odd}`; break;

            } else {
                even_odd = "odd"
                result = `${a} ${operator} ${b} = ${outcome} - ${even_odd}`; break;
            }
        case "/":
            if (a == 0) {
                console.log(`Cannot divide ${b} by zero`); break;
            } else if (b == 0) {
                console.log(`Cannot divide ${a} by zero`); break;
            }

            outcome = a / b
            result = `${a} ${operator} ${b} = ${outcome.toFixed(2)}`; break;

        case "%":
            if (a == 0) {
                console.log(`Cannot divide ${b} by zero`); break;
            } else if (b == 0) {
                console.log(`Cannot divide ${a} by zero`); break;
            }
            outcome = a % b
            result = `${a} ${operator} ${b} = ${outcome}`; break;

    }

    console.log(result)
}

solve(["10",
"0",
"%"])
