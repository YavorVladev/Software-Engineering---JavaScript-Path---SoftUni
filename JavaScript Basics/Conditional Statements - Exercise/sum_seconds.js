function solve(input){
    let first_number = Number(input[0]);
    let second_number = Number(input[1]);
    let third_number = Number(input[2]);

    let summed_time = first_number + second_number + third_number;

    let minutes = Math.floor(summed_time / 60);
    let seconds = summed_time % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

solve(["35", "45", "44"])