function generateLatinLetters(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        const letter1 = String.fromCharCode(97 + i);
        const letter2 = String.fromCharCode(97 + j);
        const letter3 = String.fromCharCode(97 + k);
        console.log(letter1 + letter2 + letter3);
      }
    }
  }
}

generateLatinLetters('3')