function removeDuplicates() {
    let previous = nums[0];
    let len = nums.length;
    nums = nums.filter((num, i) => {
        if (i === 0 || num !== previous) {
            previous = num;
            return true;
        }
        return false;
    });
    let count = nums.length;
    nums.push(...Array(len - count).fill("_"))
    return count;
}


let nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates())
console.log(nums)