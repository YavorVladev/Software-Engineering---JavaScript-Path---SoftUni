function solve(input){

    let n  = input[0];
    let sum = 0

    for (i = 0; i < n.length; i ++) {
        let number = Number(n[i]);
        sum += number

    }

    console.log(`The sum of the digits is:${sum}`)
}

solve(['1234'])