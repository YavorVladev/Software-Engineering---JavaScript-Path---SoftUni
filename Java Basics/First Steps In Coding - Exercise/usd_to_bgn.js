function transform(input){
    let usd_amount = Number(input[0]);
    let usd_transformed_to_bgn = usd_amount * 1.79549;
    console.log(usd_transformed_to_bgn);
}

transform(["22"])