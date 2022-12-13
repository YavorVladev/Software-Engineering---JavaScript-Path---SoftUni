function solve(input){

    let day = input[0];
    let ticket_price = 0

    switch (day) {
        case "Monday": ticket_price = 12; break;
        case "Tuesday": ticket_price = 12; break;
        case "Wednesday": ticket_price = 14; break;
        case "Thursday": ticket_price = 14; break;
        case "Friday": ticket_price = 12; break;
        case "Saturday": ticket_price = 16; break;
        case "Sunday": ticket_price = 16; break;
    }

    console.log(ticket_price)
}

solve(["Sunday"])