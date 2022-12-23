function solve(input) {

    let floors = Number(input.shift());
    let rooms = Number(input.shift());

    for (let current_floor = floors; current_floor > 0; current_floor --) {
        let type = '';
        for (let current_room = 0; current_room < rooms; current_room ++) {
            if (current_floor === floors) {
                type += `L${current_floor}${current_room}` + " ";
            } else if (current_floor % 2 === 0) {
                type += `O${current_floor}${current_room}` + " ";
            } else {
                type += `A${current_floor}${current_room}` + " ";
            }

        }

        console.log(type);
    }
}

solve(["6", "4"])