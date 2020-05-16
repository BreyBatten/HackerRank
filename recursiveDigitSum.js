function superDigit(n, k) {
  // we have n and k. to get p we do n, k times
  // we can calculate the super digit for n, the mult by k
  // convert to string, then recursively call superDigit func

  let firstSum = digitSumRecursive(n);
  let product = Number(firstSum) * k;

  return Number(digitSumRecursive(product.toString()));
}

function digitSumRecursive(n) {
  // base case => if < 10 or > 0
  // n is a string, so if the length of the string is 1, we know it's a single digit num
  if (n.length === 1) {
    return n;
  }
  // sum up digits of n
  let sumDigits = 0;
  for (let i = 0; i < n.length; i++) {
    sumDigits += Number(n[i]);
  }

  sumDigits = sumDigits.toString();
  // call digitSumRecursive again with the sum
  return digitSumRecursive(sumDigits);
}
