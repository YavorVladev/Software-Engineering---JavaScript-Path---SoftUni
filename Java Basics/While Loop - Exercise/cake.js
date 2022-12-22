function solve(input) {

    let width = Number(input.shift());
    let length = Number(input.shift());
    let cake_slices = width * length
    let not_enough = false

    let command = input.shift();

    while (command !== "STOP") {

        let taken_slice = Number(command);
        cake_slices -= taken_slice

        if (cake_slices <= 0) {
            not_enough = true; break;
        }

        command = input.shift();
    }

    if (not_enough) {
        console.log(`No more cake left! You need ${Math.abs(cake_slices)} pieces more.`)
    } else {
        console.log(`${cake_slices} pieces are left.`)
    }
}

solve(["10",
"2",
"2",
"4",
"6",
"STOP"])


