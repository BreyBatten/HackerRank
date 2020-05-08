/*
Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money.

Given a list of prices and an amount to spend, what is the maximum number of toys Mark can buy? For example, if prices = [1, 2, 3, 4] and Mark has k=7 to spend, he can buy items [1, 2, 3] for 6, or [3, 4] for 7 units of currency. He would choose the first group of 3 items.

Function Description

Complete the function maximumToys in the editor below. It should return an integer representing the maximum number of toys Mark can purchase.

maximumToys has the following parameter(s):

prices: an array of integers representing toy prices
k: an integer, Mark's budget
Input Format

The first line contains two integers, n and k, the number of priced toys and the amount Mark has to spend.
The next line contains n space-separated integers prices[i]

A toy can't be bought multiple times.

Output Format

An integer that denotes the maximum number of toys Mark can buy for his son.

Sample Input

7 50
1 12 5 111 200 1000 10
Sample Output

4
Explanation

He can buy only  toys at most. These toys have the following prices: .
*/

// O(n log(n))
// Complete the maximumToys function below.
function maximumToys(prices, k) {
  // O(n log(n))
  // sort array in ascending,
  prices.sort((a, b) => a - b);

  // O(n)
  // then loop through add prices until we get to our total price(k)
  let totalPrice = 0;
  let totalItems = 0;
  // returns each object/value in array
  for (let p of prices) {
    if (totalPrice + p <= k) {
      totalPrice += p;
      totalItems++;
    } else {
      return totalItems;
    }
  }

  return totalItems;

  // for-in loop returns index
  // for(let i in prices) {

  // }

  // O(n), optimization?
  // we could cut out everything priced higher than 'k'
}
