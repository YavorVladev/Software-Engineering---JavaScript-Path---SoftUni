function solve(input) {

    let n = Number(input[0]);
    let data = {'p1': 0, "p2": 0,'p3': 0, "p4": 0, "p5": 0};

    for (i = 1; i <= n; i ++) {
        let current_num = input[i];

        if (current_num < 200) {
            data['p1'] ++;
        } else if (current_num < 400) {
            data['p2'] ++;
        } else if (current_num < 600) {
            data['p3'] ++;
        } else if (current_num < 800) {
            data['p4'] ++;
        } else {
            data['p5'] ++;
        }

    }
   
    let result_p1 = data['p1'] = (data['p1'] / n) * 100
    let result_p2 = data['p2'] = (data['p2'] / n) * 100
    let result_p3 = data['p3'] = (data['p3'] / n) * 100
    let result_p4 = data['p4'] = (data['p4'] / n) * 100
    let result_p5 = data['p5'] = (data['p5'] / n) * 100
    console.log(result_p1.toFixed(2) + "%")
    console.log(result_p2.toFixed(2) + "%")
    console.log(result_p3.toFixed(2) + "%")
    console.log(result_p4.toFixed(2) + "%")
    console.log(result_p5.toFixed(2) + "%")

}

solve(["14",
"53",
"7",
"56",
"180",
"450",
"920",
"12",
"7",
"150",
"250",
"680",
"2",
"600",
"200"])
