function toy_shop(input){
    let trip_price = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);
    let discount = 0

    let total_sum = puzzles * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2
    let total_toys = puzzles + dolls + bears + minions + trucks
    if (total_toys >= 50) {
        discount = total_sum * 0.25
    }
    
    let final_price = total_sum - discount
    let rent = final_price * 0.10
    let profit = final_price - rent

    let result = ""
    if (profit >= trip_price) {
        let left_money = profit - trip_price
        result = `Yes! ${left_money.toFixed(2)} lv left.`
    } else {
        let needed_money = trip_price - profit
        result = `Not enough money! ${needed_money.toFixed(2)} lv needed.`
    }

    console.log(result)


}

toy_shop(["320",
"8",
"2",
"5",
"5",
"1"])