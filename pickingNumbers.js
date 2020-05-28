function pickingNumbers(a) {
  // there can't be an int > 100
  let map = new Array(100);
  // fill our map with 0's to begin
  map.fill(0);

  // populate our map with for-loop
  // keys will have values of # of times they appear in input array
  for (let i = 0; i < a.length; i++) {
    map[a[i]]++;
  }
  console.log(map);

  // value to keep track of highest sum
  let max = 0;
  // iterate over our map
  for (let j = 1; j < map.length; j++) {
    if (map[j] + map[j - 1] > max) {
      max = map[j] + map[j - 1];
    }
  }

  return max;
}
