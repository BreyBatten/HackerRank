function threeNumSum(arr, target) {
    let final = [];

    arr.sort((a, b) => {
        return a - b
    });

    for(let i = 0; i < arr.length; i++) {
        let j = i + 1;
        let k = arr.length - 1;

        while(j < k) {
            let sum = arr[i] + arr[j] + arr[k];

            if(sum === target) {
                final.push([arr[i], arr[j], arr[k]]);
                final.sort((a, b) => {
                    return a - b
                });
                j++;
                k--;
            }
            if(sum < target) {
                j++;
            }
            if(sum > target) {
                k--;
            }
        }
    }
    return final;
}
