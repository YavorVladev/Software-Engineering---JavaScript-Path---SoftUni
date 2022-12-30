function solve(input) {

    let destination = input.shift();

    while (destination !== "End") {
        let needed_money = Number(input.shift());
        let saved_money = 0;
        while (saved_money < needed_money) {
            let saved_amount = Number(input.shift());
            saved_money += saved_amount;
        }


        console.log(`Going to ${destination}!`)
        destination = input.shift();
    }
}
solve(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
