function solve(input){

    let budget = Number(input[0]);
    let season = input[1];

    let destination = ""
    let sleeping_place = ""
    let price = 0    

    if (budget <= 100){
        destination = "Bulgaria";
        switch (season) {
            case "summer":
                sleeping_place = "Camp";
                price = budget * 0.30; break;
            case "winter":
                sleeping_place = "Hotel"
                price = budget * 0.70; break;
        }

    } else if (budget <= 1000) {
        destination = "Balkans"
        switch (season) {
            case "summer":
                sleeping_place = "Camp";
                price = budget * 0.40; break;
            case "winter":
                sleeping_place = "Hotel";
                price = budget * 0.80; break;
        }

    } else if (budget > 1000) {
        destination = "Europe"
        sleeping_place = "Hotel"
        price = budget * 0.90
    }

    let result = `Somewhere in ${destination}\n${sleeping_place} - ${price.toFixed(2)}`
    console.log(result)

}

solve(["678.53", "winter"])
