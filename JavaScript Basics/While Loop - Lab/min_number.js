function solve(input) {

    let smallest_num = +999999999999999

    while (true) {
        let command = input.shift();

        if (command == "Stop") {
            break;
        }

        command = Number(command);
        
        if (command < smallest_num) {
            smallest_num = command
        }
    }

    console.log(smallest_num);

}

solve(["-1",
"-2",
"Stop"])

