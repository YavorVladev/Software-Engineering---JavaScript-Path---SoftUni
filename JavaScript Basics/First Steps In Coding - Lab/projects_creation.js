function solve(input){
    let name = input[0];
    let projcets = Number(input[1]);
    let needed_time = projcets * 3;

    console.log(`The architect ${name} will need ${needed_time} hours to complete ${projcets} project/s.`);
}

solve(["George", "4"])