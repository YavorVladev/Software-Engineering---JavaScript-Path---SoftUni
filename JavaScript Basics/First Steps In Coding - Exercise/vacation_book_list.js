function solve(input){
    let book_pages = Number(input[0])
    let pages_per_hour = Number(input[1])
    let deadline = Number(input[2])
    let total_hours = book_pages / pages_per_hour
    let needed_hours_per_day = total_hours / deadline

    console.log(needed_hours_per_day)

}

solve(["212", "20", "2"])