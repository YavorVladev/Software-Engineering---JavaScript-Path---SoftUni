function solve(input){
    let greening_amount_raw_price = Number(input[0] * 7.61)
    let greening_amount_discount = greening_amount_raw_price * 0.18
    let final_price = greening_amount_raw_price - greening_amount_discount

    console.log(`The final price is: ${final_price} lv.`)
    console.log(`The discount is: ${greening_amount_discount} lv.`)

}

solve(["550"])