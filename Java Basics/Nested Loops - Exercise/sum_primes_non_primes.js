function solve(input) {

    let command = input.shift();
    let prime_sum = 0;
    let non_prime_sum = 0;

    while (command !== "stop") {
        let current_num = Number(command);

        if (current_num < 0) {
            console.log(`Number is negative.`);
            command = input.shift(); continue
        }

        let counter = 0;

        for (let i = 1; i <= current_num; i ++) {
            if (current_num % i === 0) {
                counter += 1;
            }
        }

        if (counter === 2) {
            prime_sum += current_num;
        } else {
            non_prime_sum += current_num;
        }

        command = input.shift();
    }

    console.log(`Sum of all prime numbers is: ${prime_sum}`)
    console.log(`Sum of all non prime numbers is: ${non_prime_sum}`)
}

solve(["0",
"-9",
"0",
"stop"])


