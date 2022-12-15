function solve(input){

    let budget = Number(input[0]);
    let season = input[1];
    let people = Number(input[2]);

    let price = 0
    if (season == "Summer" || season == "Autumn") {
        let boat_cost = 4200;
        if (people <= 6) {
            price = boat_cost - (boat_cost * 0.10)

        } else if (7 <= people && people <= 11) {
            price = boat_cost - (boat_cost * 0.15)

        } else if (people > 12) {
            price = boat_cost - (boat_cost * 0.25)
        }
    } else if (season == "Spring") {
        let boat_cost = 3000;
        if (people <= 6) {
            price = boat_cost - (boat_cost * 0.10)

        } else if (7 <= people && people <= 11) {
            price = boat_cost - (boat_cost * 0.15)

        } else if (people > 12 && season != "Autumn") {
            price = boat_cost - (boat_cost * 0.25)
        }

    } else if (season == "Winter") {
        let boat_cost = 2600
        if (people <= 6) {
            price = boat_cost - (boat_cost * 0.10)

        } else if (7 <= people && people <= 11) {
            price = boat_cost - (boat_cost * 0.15)

        } else if (people > 12) {
            price = boat_cost - (boat_cost * 0.25)
        }

    }

    if (people % 2 == 0 && season != "Autumn") {
        price = price - (price * 0.05)
    }

    let result = ""
    if (budget >= price) {
        let money_left = budget - price
        result = `Yes! You have ${money_left.toFixed(2)} leva left.`
        
    } else {
        let needed_money = price - budget
        result = `Not enough money! You need ${needed_money.toFixed(2)} leva.`
    }

    console.log(result)
}

solve(["3600",
"Autumn",
"6"])