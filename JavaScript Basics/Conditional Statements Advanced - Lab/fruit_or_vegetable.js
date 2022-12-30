function solve(input){

    let product = input[0];

    let result = ""
    switch (product) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            result = "fruit";
            break;

        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            result = "vegetable";
            break;

        default:
            result = "unknown";
            break;
    }

    console.log(result)
}

solve(["water"])