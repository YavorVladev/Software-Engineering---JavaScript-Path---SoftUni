function solve(input) {

    let name = input.shift();
    let failed = 0
    let class_grade = 1
    let total_grades = 0
    let sum_grades = 0
    let result = ''

    while (class_grade <= 12) {
        let grade = Number(input.shift());

        if (grade < 4.00) {
            failed += 1;
        } else {
            class_grade += 1
        }

        if (failed > 1) {
            result = `${name} has been excluded at ${class_grade} grade`;
            break;
        }

        total_grades += 1;
        sum_grades += grade
    }

    let average_grade = sum_grades / total_grades;

    if (failed > 1) {
        result = `${name} has been excluded at ${class_grade} grade`;
    } else {
        result = `${name} graduated. Average grade: ${average_grade.toFixed(2)}`
    }

    console.log(result);
    
}

solve(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])



