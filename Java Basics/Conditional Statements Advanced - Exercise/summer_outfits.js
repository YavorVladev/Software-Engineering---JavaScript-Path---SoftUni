function solve(input){

    let t = Number(input[0]);
    let time_a_day = input[1];
    let outfit = "";
    let shoes = "";

    if (time_a_day == "Morning") {
        if (10 <= t && t <= 18) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (18 < t && t <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins"
        } else if (t >= 25) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    } else if (time_a_day == "Afternoon") {
        if (10 <= t && t <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (18 < t && t <= 24) {
            outfit = "T-Shirt";
            shoes = "Sandals"
        } else if (t >= 25) {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }

    } else if (time_a_day == "Evening") {
        if (10 <= t && t <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (18 < t && t <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins"
        } else if (t >= 25) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }

    result = `It's ${t} degrees, get your ${outfit} and ${shoes}.`
    console.log(result)
}

solve(["22",
"Afternoon"])