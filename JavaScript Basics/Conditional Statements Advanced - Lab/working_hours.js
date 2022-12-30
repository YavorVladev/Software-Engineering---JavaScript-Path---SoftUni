function solve(input){

    let hour = Number(input[0]);
    let day = input[1];
    let result = ""

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            if (hour >= 10 && hour <= 18) {
                result = "open";
                break;

            }
        case "Sunday":
            result = "closed";
            break;

            
    }

    console.log(result)
}

solve(["11", "Monday"])