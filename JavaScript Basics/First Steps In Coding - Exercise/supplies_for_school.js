function solve(input){
    let pencils = Number(input[0] * 5.80);
    let sharpies = Number(input[1] * 7.20);
    let board_cleaner = Number(input[2] * 1.20);
    let discount = Number(input[3] / 100);

    let total_amount = pencils + sharpies + board_cleaner;
    console.log(total_amount - (total_amount * discount))

}

solve(["2", "3", "4", "25"])