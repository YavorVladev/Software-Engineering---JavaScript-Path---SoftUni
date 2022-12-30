function solve(input){
    let chicken_menu = Number(input[0] * 10.35);
    let fish_menu = Number(input[1] * 12.40);
    let vegan_menus = Number(input[2] * 8.15);
    let final_sum = chicken_menu + fish_menu + vegan_menus
    let dessert_sum = final_sum * 0.20
    let delivery_fee = 2.50

    console.log(final_sum + dessert_sum + delivery_fee)

}

solve(["2","4","3"])