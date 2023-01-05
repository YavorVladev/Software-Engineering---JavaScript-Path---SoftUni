function solve(grade) {

    let result = ``;

    if (grade >= 5.50) {
        result = `Excellent`;
    } else {
        result = `Not excellent`;
    }

    console.log(result);
}

solve(5.49)