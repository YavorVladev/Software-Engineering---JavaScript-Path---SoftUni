function roundNumber(number, precision) {
    if (precision > 15) {
      precision = 15;
    }
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    var roundedNumber = roundedTempNumber / factor;
    console.log(parseFloat(roundedNumber.toFixed(precision)));
  }

roundNumber(3.1415926535897932384626433832795,2)