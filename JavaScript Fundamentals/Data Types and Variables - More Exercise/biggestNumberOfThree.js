function biggestNumberOfThree(input) {

    let biggest = -9999999999;

    while (input.length > 0) {

        let currentNum = Number(input.shift());

        if (currentNum >= biggest) {
            biggest = currentNum;
        }

    }



    console.log(biggest);
}

biggestNumberOfThree([43,
    43.2,
    43.1
])