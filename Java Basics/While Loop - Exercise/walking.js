function solve(input) {

    let goal = 10000;
    let steps_made = 0

    while (true) {
        if (steps_made >= goal) {
            break;
        }

        let command = input.shift();

        if (command == "Going home") {
            break;
        }


        command = Number(command);
        steps_made += command;


    }

    let steps_to_home = Number(input.shift());
    steps_made += steps_to_home;

    if (steps_made < goal) {
        console.log(`${goal - steps_made} more steps to reach goal`);
    } else {
        console.log(`Goal reached! Good job! ${steps_made - goal} steps over the goal!`)
    }
}

solve(["1000",
"1500",
"2000",
"6500"])


