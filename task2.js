function getIndexes(nums, target) {
    try {
        nums.forEach((num, i) => {
            nums.slice(i + 1).forEach((nextNum, j) => {
                if (num + nextNum === target) {
                    throw [i, i + 1 + j];
                }
            });
        });
    } catch (result) {
        return result;
    }
    return null;
}


const nums = [2,7,11,15];
const target = 9;
console.log(getIndexes(nums, target));