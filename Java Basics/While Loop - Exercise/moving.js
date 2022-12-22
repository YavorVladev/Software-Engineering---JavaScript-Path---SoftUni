function solve(input) {

    let l = Number(input.shift());
    let w = Number(input.shift());
    let h = Number(input.shift());
    let available_space = l * w * h;
    let full = false;

    command = input.shift();

    while (command !== "Done") {

        let box_size = Number(command);
        available_space -= box_size;

        if (available_space <= 0) {
            full = true; break;
        }

        command = input.shift();
    }

    if (full) {
        console.log(`No more free space! You need ${Math.abs(available_space)} Cubic meters more.`)
    } else {
        console.log(`${available_space} Cubic meters left.`)
    }
}

solve(["10", 
"1",
"2",
"4", 
"6",
"Done"])

