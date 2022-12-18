function solve(input){

    let age = Number(input[0]);
    let washing_machine_price = Number(input[1]);
    let toy_price = Number(input[2]);
    let collected_toys = 0
    let collected_money = 10
    let sum = 0
    let brother = 0

    for (let i = 1; i <= age; i ++) {

        if (i % 2 == 0) {
            brother += 1
            sum += collected_money
            collected_money += 10
        } else {
            collected_toys += 1
        }
    }

    let money_toys = collected_toys * toy_price;
    let total_sum = money_toys + sum - brother;

    let diff = Math.abs(total_sum - washing_machine_price);

    let result = ""
    if (total_sum >= washing_machine_price) {
        result = `Yes! ${diff.toFixed(2)}`
    } else {
        result = `No! ${diff.toFixed(2)}`
    }


    console.log(result)
}

solve(["10",
"170.00",
"6"])

