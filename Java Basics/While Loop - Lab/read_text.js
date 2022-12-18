function solve(input) {

    let index = 0;

    while (true) {

        let data = input[index];
        index ++;
        if (data == "Stop") {
            break;
        }

        console.log(data);
    }
}


solve(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])

