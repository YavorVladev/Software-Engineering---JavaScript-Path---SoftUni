function concatenate(input){
    let first_name = input[0];
    let last_name = input[1];
    let age = Number(input[2]);
    let town = input[3];

    let concatenated_data = `You are ${first_name} ${last_name}, a ${age}-years old person from ${town}.`;
    console.log(concatenated_data);
}

concatenate(["Yavor", "Vladev", 22, "Dimitrovgrad"])