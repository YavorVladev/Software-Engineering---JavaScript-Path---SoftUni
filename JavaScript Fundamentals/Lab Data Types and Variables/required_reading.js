function solve(TotalPages, OneHourPages, Deadline) {

    let HoursToRead = TotalPages / OneHourPages;
    let NeededTime = HoursToRead / Deadline;

    console.log(NeededTime);

}

solve(212,20,2)