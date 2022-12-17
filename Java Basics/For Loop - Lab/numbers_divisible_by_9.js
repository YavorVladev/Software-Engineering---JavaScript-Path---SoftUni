function solve(input){

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let sum = 0;
    let all_nums = '';

    for (let i = n1; i <= n2; i ++) {
        if (i % 9 == 0) {
            sum += i;
            all_nums += i + '\n';
        }
    }

    console.log(`The sum: ${sum}\n${all_nums}`)
}

solve(['100', '200'])