function solve(input){
    let bonus = 0;
    let given_number = Number(input[0]);

    if (given_number <= 100) {
        bonus = 5
    } else if (given_number > 100 && given_number <= 1000) {
        bonus = given_number * 0.20
    } else if (given_number > 1000) {
        bonus = given_number * 0.10
    }

    if (given_number % 2 == 0) {
        bonus += 1
    } else if (given_number % 10 == 5) {
        bonus += 2
    }

    console.log(bonus)
    console.log(given_number + bonus)
}

solve(["1500"])