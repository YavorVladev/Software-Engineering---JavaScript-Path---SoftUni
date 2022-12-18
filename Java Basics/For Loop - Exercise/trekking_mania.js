function solve(input) {

    let grp_iterations = Number(input.shift());
    let data = {"Musala": 0, "Monblan": 0, "KMJ": 0, "K2": 0 , "Everest": 0};
    let total_people = 0

    for (i = 0; i < grp_iterations; i ++) {

        let current_group = Number(input[i]);
        total_people += current_group

        if (current_group <= 5) {
            data['Musala'] += current_group
        } else if (current_group >= 6 && current_group <= 12) {
            data['Monblan'] += current_group
        } else if (current_group >= 13 && current_group <= 25) {
            data['KMJ'] += current_group
        } else if (current_group >= 26 && current_group <= 40) {
            data['K2'] += current_group
        } else if (current_group >= 41) {
            data['Everest'] += current_group
        }


    }

    let musala_climbers = (data['Musala'] / total_people) * 100
    let monblan_climbers = (data['Monblan'] / total_people) * 100
    let KMJ_climbers = (data['KMJ'] / total_people) * 100
    let K2_climbers = (data['K2'] / total_people) * 100
    let Everest_climbers = (data['Everest'] / total_people) * 100

    console.log(`${musala_climbers.toFixed(2)}%`)
    console.log(`${monblan_climbers.toFixed(2)}%`)
    console.log(`${KMJ_climbers.toFixed(2)}%`)
    console.log(`${K2_climbers.toFixed(2)}%`)
    console.log(`${Everest_climbers.toFixed(2)}%`)

}

solve(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])

