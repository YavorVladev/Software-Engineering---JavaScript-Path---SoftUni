function solve(text) {

    let split_text = text.split("");
    let reverse_array = split_text.reverse();
    let join_array = reverse_array.join("");
    console.log(join_array);
}

solve("Hello")