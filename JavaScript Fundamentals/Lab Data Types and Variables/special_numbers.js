function checkSpecial(n) {
    for (let i = 1; i <= n; i++) {
      let digitsSum = 0;
      let currentNum = i;
  
      while (currentNum > 0) {
        digitsSum += currentNum % 10;
        currentNum = Math.floor(currentNum / 10);
      }
  
      let result = "False";
      if (digitsSum === 5 || digitsSum === 7 || digitsSum === 11) {
        result = "True";
      }
  
      console.log(`${i} -> ${result}`);
    }
  }

  checkSpecial(15)