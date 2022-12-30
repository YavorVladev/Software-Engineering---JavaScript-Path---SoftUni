function solve(input){
    let movie_name = input[0];
    let ep_length = Number(input[1]);
    let break_length = Number(input[2]);

    let lunch_time = break_length / 8
    let chill_time = break_length / 4
    let time_left = break_length - lunch_time - chill_time

    result = ""
    if (time_left >= ep_length) {
        let free_time = Math.ceil(time_left - ep_length)
        result = `You have enough time to watch ${movie_name} and left with ${free_time} minutes free time.`
    } else {
        let free_time = Math.ceil(ep_length - time_left)
        result = `You don't have enough time to watch ${movie_name}, you need ${free_time} more minutes.`
    }

    console.log(result)
}

solve(["Teen Wolf",
"48",
"60"])