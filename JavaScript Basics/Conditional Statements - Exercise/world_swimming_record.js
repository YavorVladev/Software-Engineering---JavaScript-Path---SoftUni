function solve(input){
    let current_record = Number(input[0]);
    let length_in_m = Number(input[1]);
    let time_for_1m_in_seconds = Number(input[2]);

    let meters_to_seconds = length_in_m * time_for_1m_in_seconds
    let additional_time = Math.floor(length_in_m / 15) * 12.5
    let total_time = (meters_to_seconds + additional_time)

    
    let result = ""
    if (total_time < current_record) {
        result = `Yes, he succeeded! The new world record is ${total_time.toFixed(2)} seconds.`
    } else {
        total_time = total_time - current_record
        result = `No, he failed! He was ${total_time.toFixed(2)} seconds slower.`
    }

    console.log(result)
}

solve(["10464",
"1500",
"20"])