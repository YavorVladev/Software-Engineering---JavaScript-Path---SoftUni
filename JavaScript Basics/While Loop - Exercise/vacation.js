function solve(input) {

    let needed_money = Number(input.shift());
    let available_money = Number(input.shift());
    let days_spending = 0
    let days = 0
    let failed = false
    let success = false

    while (true) {
        days += 1
        let action = input.shift();
        let save_or_pay = Number(input.shift());

        if (action == "spend") {
            available_money -= save_or_pay;
            if (available_money <= 0) {
                available_money = 0;
            }
            days_spending += 1;
        } else if (action == "save") {
            available_money += save_or_pay;
            days_spending = 0;
        }

        if (days_spending >= 5) {
            failed = true
            break;
        } if (available_money >= needed_money) {
            success = true; break;

        }
    }

    if (failed) {
        console.log(`You can't save the money.\n${days}`);
    }

    if (success) {
        console.log(`You saved the money for ${days} days.`)
    }
}

solve(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])


