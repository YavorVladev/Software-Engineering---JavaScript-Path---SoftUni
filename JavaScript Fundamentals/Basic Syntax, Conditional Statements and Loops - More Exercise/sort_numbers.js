function solve(a, b, c) {
  const numbers = [a, b, c];
  numbers.sort((a, b) => b - a);

  for (const num of numbers) {
    console.log(num);
  }
}

solve(1,2,3)