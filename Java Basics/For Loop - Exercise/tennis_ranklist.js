function solve(input) {

    let tournaments_played = Number(input.shift());
    let starting_points = Number(input.shift());
    let copy_points = starting_points
    let won_tournaments = 0

    for (i = 0; i < tournaments_played; i ++) {
        let outcome = input.shift();

        switch (outcome) {
            case "W": starting_points += 2000; won_tournaments += 1; break;
            case "F": starting_points += 1200; break;
            case "SF": starting_points += 720; break;
        }
    }

    let average_points = starting_points - copy_points
    average_points /= tournaments_played
    let percent_won_tournaments = (won_tournaments / tournaments_played) * 100;

    console.log(`Final points: ${starting_points}\nAverage points: ${Math.floor(average_points)}\n${percent_won_tournaments.toFixed(2)}`)


}

solve(["4",
"750",
"SF",
"W",
"SF",
"W"])

