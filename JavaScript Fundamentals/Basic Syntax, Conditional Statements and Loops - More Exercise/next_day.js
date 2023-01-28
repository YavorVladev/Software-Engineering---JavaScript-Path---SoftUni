function getNextDay(year, month, day) {
  var lastDayOfMonth = new Date(year, month, 0).getDate();

  if (year === 1) {
    year = 1901;
  }


  if (day === lastDayOfMonth) {
    day = 1;
    month++;

    if (month > 12) {
      month = 1;
      year++;
    }
  } else {
    day++;
  }

  return year + "-" + month + "-" + day;
}

console.log(getNextDay(1, 1, 1)); 
console.log(getNextDay(2020, 3, 24)); 
