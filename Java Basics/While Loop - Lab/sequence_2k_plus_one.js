function solve(input) {

    let n = Number(input.shift());
    let index = 0;
    let counter = 1;

    while (true) {

        console.log(counter)
        counter += counter + 1

        if (counter > n) {
            break;
        }
    }
}

solve(["31"])