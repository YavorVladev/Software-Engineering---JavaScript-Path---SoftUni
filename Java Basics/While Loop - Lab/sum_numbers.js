function solve(input){

    let starting_n = Number(input.shift());
    let total_sum = 0
    let index = 0

    while (true) {
        let new_number = Number(input[index]);
        index ++;
        total_sum += new_number

        if (total_sum >= starting_n) {
            console.log(total_sum); break;
        }
    }
}

solve(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

