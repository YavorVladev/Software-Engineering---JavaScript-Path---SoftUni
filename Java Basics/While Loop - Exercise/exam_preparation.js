function solve(input) {

    let allowed_mistakes = Number(input.shift());
    let needs_break = false
    let failures = 0
    let total_problems = 0
    let sum_points = 0
    let last_problem = [];

    while (true) {
        let curr_problem = input.shift();

        last_problem.push(curr_problem);


        if (curr_problem == "Enough") {
            last_problem.pop()
            break;
        }

        let curr_grade = Number(input.shift());

        if (curr_grade <= 4) {
            failures += 1;

            if (failures >= allowed_mistakes) {
                needs_break = true;
                break;
            }

        }

        sum_points += curr_grade
        total_problems += 1;

    }

    let average_score = sum_points/ total_problems;

    if (needs_break == false) {
        console.log(`Average score ${average_score.toFixed(2)}\nNumber of problems: ${total_problems}\nLast problem: ${last_problem.slice(-1)}`)
    } else {
        console.log(`You need a break, ${failures} poor grades.`)
    }
}

solve(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


