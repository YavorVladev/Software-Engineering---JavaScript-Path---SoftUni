function solve(input) {

    let biggest_num = -999999999999999

    while (true) {
        let command = input.shift();

        if (command == "Stop") {
            break;
        }

        command = Number(command);
        
        if (command > biggest_num) {
            biggest_num = command
        }
    }

    console.log(biggest_num);

}

solve(["100",
"99",
"80",
"70",
"Stop"])




