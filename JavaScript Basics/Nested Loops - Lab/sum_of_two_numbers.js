function solve(input) {

    let x = Number(input.shift());
    let y = Number(input.shift());
    let magic_number = Number(input.shift());
    let is_found = false;

    let iterations = 0

    for (let f = x; f <= y; f ++) {
        for (let s = x; s <= y; s ++) {
            iterations += 1

            if (f + s === magic_number) {
                is_found = true;
                console.log(`Combination N:${iterations} (${f} + ${s} = ${f + s})`); break;
            }
        }

        if (is_found) {
            break;
        }
        
    }

    if (is_found === false) {
        console.log(`${iterations} combinations - neither equals ${magic_number}`)
    }
}

solve(["88",
"888",
"1000"])




