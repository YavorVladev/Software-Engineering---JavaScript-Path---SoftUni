function solve(input){

    let budget = Number(input[0]);
    let amaount_videocard = Number(input[1]);
    let amount_processors = Number(input[2]);
    let amount_RAM = Number(input[3]);

    let total_video_card_price = amaount_videocard * 250
    let processor_price = total_video_card_price * 0.35
    let RAM_price = total_video_card_price * 0.10

    let pc_price = amaount_videocard * 250 + amount_processors * processor_price + amount_RAM * RAM_price
    
    if (amaount_videocard > amount_processors) {
        pc_price = pc_price - (pc_price * 0.15)
    }

    result = ""
    if (budget >= pc_price) {
        let left_money = budget - pc_price
        result = `You have ${left_money.toFixed(2)} leva left!`
    } else {
        let needed_money = pc_price - budget
        result = `Not enough money! You need ${needed_money.toFixed(2)} leva more!`
    }

    console.log(result)
}

solve(["920.45",
"3",
"1",
"1"])