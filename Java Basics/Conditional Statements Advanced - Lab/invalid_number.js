function solve(input){

    let number = Number(input[0]);
    let is_valid = number >= 100 && number <= 200 || number == 0;

    let result = ""
    if (!is_valid) {
        result = "invalid"

    }

    console.log(result)
}

solve(["0"])