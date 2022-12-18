function solve(input) {

    let open_tabs = Number(input[0]);
    let salary = Number(input[1]);
    let temp_salary = salary
    let result = ''

    for (i = 2; i <= open_tabs + 1; i ++) {

        if (temp_salary <= 0) {
            break;
        }

        let current_tab = input[i]

        switch (current_tab) {
            case "Facebook": temp_salary -= 150; break;
            case "Instagram": temp_salary -= 100; break;
            case "Reddit": temp_salary -= 50; break;
        }
    }


    if (temp_salary <= 0) {
        console.log("You have lost your salary.")

    } else {
        console.log(temp_salary)
    }
}

solve(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])


