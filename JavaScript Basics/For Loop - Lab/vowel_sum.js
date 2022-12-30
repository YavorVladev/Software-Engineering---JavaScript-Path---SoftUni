function solve(input){

    let vowels = { "a" : 1 , "e": 2 , "i" : 3, "o" : 4 , "u" : 5};

    let text = input[0];
    let total_sum = 0

    for (i=0; i < text.length; i++) {
        let letter = text[i];
        
        if (letter in vowels) {
            total_sum += vowels[letter];
        }
    }

    console.log(total_sum);
}

solve(["beer"])