function solve(input){
    let length_cm = Number(input[0]);
    let width_cm = Number(input[1]);
    let height_cm = Number(input[2]);
    let percent = Number(input[3] / 100);

    let volume_cm = length_cm * width_cm * height_cm;
    let volume_liters = volume_cm / 1000
    let needed_liters = volume_liters * (1 - percent)
    console.log(needed_liters)
}

solve(["85","75","47","17"])
