function solve(input){

    let type = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let income = 0
    switch (type) {
        case "Premiere":
            income = rows * cols * 12.00; break;
        case "Normal":
            income = rows * cols * 7.50; break;
        case "Discount":
            income = rows * cols * 5.00; break;
    }

    console.log(`${income.toFixed(2)} leva`)
}

solve(["Normal",
"21",
"13"])