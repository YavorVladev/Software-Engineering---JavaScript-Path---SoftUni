function solve(text, char, result) {

    let replaced_string = text.replace("_", char);
    let outcome = replaced_string === result ? "Matched" : "Not Matched";
    console.log(outcome);
}

solve('Str_ng', 'i', 'String')