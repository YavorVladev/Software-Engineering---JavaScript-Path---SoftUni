function solve(input){
    let safety_paper = Number(input[0]);
    let needed_paint = Number(input[1]);
    let liquid = Number(input[2] * 5);
    let needed_hours = Number(input[3]);

    let sum_paper = (safety_paper + 2) * 1.50;
    let sum_needed_paint = (needed_paint * 1.10) * 14.50;

    let total_sum_materials = sum_paper + sum_needed_paint + liquid + 0.40;
    let workers_sum = (total_sum_materials * 0.30) * needed_hours;
    let final_sum = total_sum_materials + workers_sum;
    console.log(final_sum);
}

solve(["10", "11", "4", "8"]);