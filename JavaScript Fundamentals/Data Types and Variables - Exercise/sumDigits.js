function sumOfDigits(number) {
  return number.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0);
}

console.log(sumOfDigits(2123))
