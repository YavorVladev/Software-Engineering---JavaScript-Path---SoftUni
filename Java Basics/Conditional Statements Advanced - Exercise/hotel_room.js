function solve(input){

    let month = input[0];
    let nights = Number(input[1]);

    let studio_price = 76
    let apartment_price = 77

    if (month == "May" || month == "October") {
        studio_price = 50
        apartment_price = 65

        if (nights > 14) {
            studio_price *= 0.7
        } else if (days > 7) {
            studio_price *= 0.95
        }
    } else if (month == "June" || month == "September") {
        studio_price = 75.2
        apartment_price = 68.7
        if (nights > 14) {
            studio_price *= 0.8
        }
    }

    if (nights > 14) {
        apartment_price *= 0.9
    }

    let total_apartment_price = nights * apartment_price
    let total_studio_price = nights * studio_price
    console.log(`Apartment: ${total_apartment_price.toFixed(2)} lv.`)
    console.log(`Studio: ${total_studio_price.toFixed(2)} lv.`)
    
}

solve(["August",
"20"])