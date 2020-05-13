function rotLeft(a, d) {
  let newA = [];

  for (let i = 0; i < a.length; i++) {
    newA.push(a[i]);
  }

  for (let j = 1; j <= d; j++) {
    newA.shift(newA.push(newA[0]));
  }
  return newA;
}
