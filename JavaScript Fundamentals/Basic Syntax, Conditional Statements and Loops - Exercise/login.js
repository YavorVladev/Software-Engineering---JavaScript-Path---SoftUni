function solve(data) {

    let username = data.shift()
    let tries = 0

    for (let i = 0; i <= data.length; i++) {

        let password = data[i]
        password = password.split('').reverse().join('');

        if (password === username) {
            console.log(`User ${username} logged in.`); break;

        } else if (password !== username) {
            tries += 1

            if (tries === 4) {
                console.log(`User ${username} blocked!`); break;

            }
            console.log(`Incorrect password. Try again.`)

        }

    }
}

solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])
