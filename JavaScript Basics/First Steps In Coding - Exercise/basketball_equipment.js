function solve(input){
    let yearly_tax = Number(input[0]);
    let shoes_price = yearly_tax - (yearly_tax * 0.40);
    let tracksuit_price = shoes_price - (shoes_price * 0.20);
    let basketball_price = tracksuit_price * 0.25;
    let accssessories = basketball_price * 0.20;

    final_price = yearly_tax + shoes_price + tracksuit_price + basketball_price + accssessories;
    console.log(final_price);
}

solve(["365"]);