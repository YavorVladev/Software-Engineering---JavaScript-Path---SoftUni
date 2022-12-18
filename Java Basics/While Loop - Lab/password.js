function solve(input){

    let index = 0
    let username = input.shift();
    let password = input.shift();

    while (true) {

        let current_password = input[index];
        index ++;

        if (current_password == password) {
            console.log(`Welcome ${username}!`)
            break;
        }

    }
}

solve(["Gosho",
"secret",
"secret"])

