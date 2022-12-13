function solve(input){
    let budget = Number(input[0]);
    let people = Number(input[1]);
    let clothing_per_person = Number(input[2]);

    let decoration_sum = budget * 0.10
    let sum_for_clothing = people * clothing_per_person

    if (people > 150) {
        discount = sum_for_clothing * 0.10
        sum_for_clothing -= discount
    }

    let needed_money = decoration_sum + sum_for_clothing

    if (budget - needed_money >= 0) {
        let money_left = budget - needed_money
        console.log(`Action!\nWingard starts filming with ${money_left.toFixed(2)} leva left.`)
    } else {
        let money_left = Math.abs(budget - needed_money)
        console.log(`Not enough money!\nWingard needs ${money_left.toFixed(2)} leva more.`)
    }
}

solve(["9587.88",
"222",
"55.68"])