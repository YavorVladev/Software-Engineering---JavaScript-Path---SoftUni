function solve(input) {

    let actor_name = input.shift();
    let points = Number(input.shift());
    let n_jury = Number(input.shift());
    let summed_points = 0
    let result = ''

    for (i = 0; i < n_jury; i ++) {

        let current_judge = input.shift();
        let judge_points = Number(input.shift());

        points += (current_judge.length * judge_points) / 2

        if (points > 1250.5) {
            result = `Congratulations, ${actor_name} got a nominee for leading role with ${points.toFixed(1)}!`;
            break;
        }


    }
    if (points <= 1250.5) {

        let needed_points = 1250.5 - points
        result = `Sorry, ${actor_name} you need ${needed_points.toFixed(1)} more!"`

    }

    console.log(result)
}

solve(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])


