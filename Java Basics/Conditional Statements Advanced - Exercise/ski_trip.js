function solve(input){

    let days = Number(input[0] - 1);
    let type_room = input[1];
    let feedback = input[2];

    let price = 0

    if (type_room == "room for one preson") {
        price = 18

    } else if (type_room == "apartment") {
        price = 25

        if (days > 15) {
            price *= 0.50

        } else if (10 <= days && days <= 15) {
            price *= 0.65
        } else {
            price *= 0.70
        }
    } else if (type_room == "president apartment") {
        price = 35
        if (days > 15) {
            price *= 0.80
        } else if (10 <= days && days <= 15) {
            price *= 0.85
        } else {
            price *= 0.90
        }
    }

    if (feedback == "positive") {
        price *= 1.25;
    } else {
        price *= 0.90
    }

    
    let total = days * price
    console.log(total.toFixed(2))
}

solve(["12",
"room for one preson",
"positive"])