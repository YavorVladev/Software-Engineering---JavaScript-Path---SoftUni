function solve(input) {

    let wanted_book = input.shift();
    let counter = 0
    let is_found = false
    let result = ''

    while (true) {
        let checked_book = input.shift();

        if (checked_book == wanted_book) {
            is_found = true;
            break;
        }

        if (checked_book == "No More Books") {
            break;
        }

        counter += 1
    }

    if (is_found) {
        result = `You checked ${counter} books and found it.`
    } else {
        result = `The book you search is not here!\nYou checked ${counter} books.`
    }

    console.log(result)
}

solve(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])

