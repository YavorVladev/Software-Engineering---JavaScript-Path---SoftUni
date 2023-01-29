function calculateDistance(x1, y1, x2, y2) {
  let xDiff = x2 - x1;
  let yDiff = y2 - y1;

  return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

console.log(calculateDistance(2,4,5,0))
