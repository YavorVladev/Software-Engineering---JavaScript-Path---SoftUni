function solve(input){
    let dog_pack = Number(input[0] * 2.50);
    let cat_pack = Number(input[1] * 4);
    let total_cost = dog_pack + cat_pack;
    console.log(`${total_cost} lv.`);

}

solve(["5","4"])