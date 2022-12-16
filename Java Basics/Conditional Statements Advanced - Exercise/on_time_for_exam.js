function solve(input){
    let exam_h = Number(input[0]);
    let exam_m = Number(input[1]);
    let exam_a_h = Number(input[2]);
    let exam_a_m = Number(input[3]);

    let exam_in_minutes = (exam_h * 60) + exam_m;
    let ariv_in_min = (exam_a_h * 60) + exam_a_m;
    let diff = (exam_in_minutes - ariv_in_min);

    if (diff < 0) {
        console.log("Late");
        let hours = Math.abs(~~(diff / 60));
        let minutes = Math.abs(diff) % 60;

        if (hours == 0) {
            console.log(`${minutes} minutes after the start`);
        } else {
            console.log(`${hours}:${minutes.padStart(2, "0")} hours after the start`)
        }
    } else if (0 <= diff && diff <= 30) {
        console.log(`On time`);

        if (diff > 0) {
            console.log(`${diff.toFixed(2)} minutes before the start`);
        }
    } else if (diff > 30) {
        console.log("Early");
        hours = ~~(diff / 60);
        minutes = Math.abs(diff) % 60;

        if (hours == 0) {
            console.log(`${minutes} minutes before the start`)

        } else {
            console.log(`${hours}:${minutes.padStart(2, "0")} hours before the start`)
        }
    }
}

solve(["16",
"00",
"15",
"00"])