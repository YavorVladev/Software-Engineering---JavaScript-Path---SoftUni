function solve(input) {

    let wanted_number = Number(input.shift());
    let total_solutions = 0

    for (let x = 0; x <= wanted_number; x ++) {
        for (let y = 0; y <= wanted_number; y ++) {
            for (let z = 0; z <= wanted_number; z ++) {
                if (x + y + z === wanted_number) {
                    total_solutions += 1
                }
            }
        }
    }

    console.log(total_solutions)
}

solve(["25"])