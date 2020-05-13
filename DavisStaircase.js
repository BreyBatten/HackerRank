let memo = {};

function stepPerms(n) {
  // base cases ->
  // idea 1 => if we have 1 stair left, there's 1 one way to get to the end
  // if there are 2 steps left, there are 2 ways
  // for 3, there are 4

  // idea 2 => if there are 0 steps left (this means we landed exactly on the ending),
  // there is 1 way to go about this
  // if we have < 0 steps left, there are 0 ways to get down from there

  // we want to call stepPerms on n-1, n-2, n-3
  // we want to add all of the options for n-1, n-2, n-3
  // O(3 ^ n)
  // if (n < 0) {
  //     return 0;
  // }

  // if (n === 0) {
  //     return 1
  // }

  // return stepPerms(n-1) + stepPerms(n-2) + stepPerms(n-3);

  // optimized with memoization => like a cache, it stores calculations its already done
  // to be accessed when it comes back up

  // O(n) with memoization
  if (memo.hasOwnProperty(n)) {
    return memo[n];
  }

  if (n < 0) {
    return 0;
  }

  if (n === 0) {
    return 1;
  }

  memo[n] = stepPerms(n - 1) + stepPerms(n - 2) + stepPerms(n - 3);
  return memo[n];
}
