function isPalindrome(number){
    const str = number.toString();
    const strReversed = str.split("").reverse().join("");
    return str === strReversed;
}

const number = -121;
console.log(isPalindrome(number));
