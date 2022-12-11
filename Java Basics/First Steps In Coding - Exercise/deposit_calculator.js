function solve(input){
    let deposit_sum = Number(input[0])
    let deadline_months = Number(input[1])
    let GLP = Number(input[2] / 100)
    let debt = deposit_sum * GLP
    let debt_for_one_month = debt / 12
    let final_sum = deposit_sum + deadline_months * debt_for_one_month
    console.log(final_sum)
}

solve(["200", "3", "5.7"])