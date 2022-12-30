function solve(input){

    let type_flower = input[0];
    let amount_flowers = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0

    switch (type_flower) {
        case "Roses":
            price = amount_flowers * 5; break;
        case "Dahlias":
            price = amount_flowers * 3.80; break;
        case "Tulips":
            price = amount_flowers * 2.80; break;
        case "Narcissus":
            price = amount_flowers * 3; break;
        case "Gladiolus":
            price = amount_flowers * 2.50; break;
    }

    if (type_flower == "Roses" && amount_flowers > 80) {
        price = price - (price * 0.10);
    } else if (type_flower == "Dahlias" && amount_flowers > 90) {
        price = price - (price * 0.15);
    } else if (type_flower == "Tulips" && amount_flowers > 80) {
        price = price - (price * 0.15);
    } else if (type_flower == "Narcissus" && amount_flowers < 120) {
        price = price * 1.15;
    } else if (type_flower == "Gladiolus" && amount_flowers < 80) {
        price = price * 1.20
    }

    result = ""
    if (budget >= price) {
        let left_over_money = budget - price
        result = `Hey, you have a great garden with ${amount_flowers} ${type_flower} and ${left_over_money.toFixed(2)} leva left.`

    } else {
        let needed_money = price - budget
        result = `Not enough money, you need ${needed_money.toFixed(2)} leva more.`
    }

    console.log(result)
}

solve(["Tulips",
"88",
"260"])