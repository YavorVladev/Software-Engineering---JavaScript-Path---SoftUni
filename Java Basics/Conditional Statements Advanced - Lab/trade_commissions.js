function solve(input){

    let town = input[0];
    let sales = Number(input[1]);

    let price = 0
    let valid_towns = ["Sofia", "Varna", "Plovdiv"]

    if (!valid_towns.includes(town) || sales < 0) {
        console.log("error")
    }

    if (0 <= sales && sales <= 500) {
        switch (town) {
            case "Sofia":
                price = sales * 0.05; console.log(price.toFixed(2));
                break;
            case "Varna":
                price = sales * 0.045; console.log(price.toFixed(2));
                break;
            case "Plovdiv":
                price = sales * 0.055; console.log(price.toFixed(2));
                break;
        }

    } else if (500 < sales && sales <= 1000) {
        switch (town) {
            case "Sofia":
                price = sales * 0.07; console.log(price.toFixed(2));
                break;
            case "Varna":
                price = sales * 0.075; console.log(price.toFixed(2));
                break;
            case "Plovdiv":
                price = sales * 0.08; console.log(price.toFixed(2));
                break;
        }
    } else if (1000 < sales && sales <= 10000) {
        switch (town) {
            case "Sofia":
                price = sales * 0.08; console.log(price.toFixed(2));
                break;
            case "Varna":
                price = sales * 0.10; console.log(price.toFixed(2));
                break;
            case "Plovdiv":
                price = sales * 0.12; console.log(price.toFixed(2));
                break;
        }
    } else if (sales > 10000) {
        switch (town) {
            case "Sofia":
                price = sales * 0.12; console.log(price.toFixed(2));
                break;
            case "Varna":
                price = sales * 0.13; console.log(price.toFixed(2));
                break;
            case "Plovdiv":
                price = sales * 0.145; console.log(price.toFixed(2));
                break;
        }
    }

}

solve(["Kaspichan",
"-50"])