function solve(input) {

    let change = Number(input.shift());
    let change_as_coins = Math.round(change * 100);
    let coins_returned = 0;

    while (change_as_coins > 0) {

        if (change_as_coins >= 200) {
            change_as_coins -= 200;
            coins_returned += 1
        } else if (change_as_coins >= 100) {
            change_as_coins -= 100;
            coins_returned += 1;
        } else if (change_as_coins >= 50) {
            change_as_coins -= 50;
            coins_returned += 1;
        } else if (change_as_coins >= 20) {
            change_as_coins -= 20;
            coins_returned += 1;
        } else if (change_as_coins >= 10) {
            change_as_coins -= 10;
            coins_returned += 1;
        } else if (change_as_coins >= 5) {
            change_as_coins -= 5;
            coins_returned += 1;
        } else if (change_as_coins >= 2) {
            change_as_coins -= 2;
            coins_returned += 1;
        } else if (change_as_coins >= 1) {
            change_as_coins -= 1;
            coins_returned += 1
        }
    }

    console.log(coins_returned);
}

solve(['2.73'])