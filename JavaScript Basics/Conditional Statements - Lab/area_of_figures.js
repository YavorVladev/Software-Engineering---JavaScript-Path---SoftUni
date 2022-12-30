function area_of_figures(input){
    let figure = input[0]
    if (figure == "square") {
        let side_a = Number(input[1]);
        let area = side_a * side_a;
        console.log(area.toFixed(3));

    } else if (figure == "rectangle") {
        let side_a = Number(input[1]);
        let side_b = Number(input[2]);
        let area = side_a * side_b;
        console.log(area.toFixed(3));
    } else if (figure == "circle") {
        let radius = Number(input[1]);
        let area = Math.PI * (radius ** 2)
        console.log(area.toFixed(3))
    } else if (figure == "triangle") {
        let side_a = Number(input[1]);
        let side_b = Number(input[2]);
        let area = (side_a * side_b) / 2
        console.log(area.toFixed(3))

    }
}

area_of_figures(["triangle" , "4.5", "20"])