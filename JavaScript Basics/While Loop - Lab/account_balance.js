function solve(input) {

    let total_sum = 0

    while (true) {
        let command = input.shift();

        if (command == "NoMoreMoney") {
            break;
        }

        command = Number(command);

        if (command < 0) {
            console.log('Invalid operation!'); break;
        }

        console.log(`Increase: ${command.toFixed(2)}`);
        total_sum += command;
    }

    console.log(`Total: ${total_sum.toFixed(2)}`);

}

solve(["120",
"45.55",
"-150"])

