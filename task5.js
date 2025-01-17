function validBrackets(string) {
    let stack = [];
    const brackets = {
        "{": "}", "[": "]", "(": ")"
    };
    for (let i of string) {
        if (Object.keys(brackets).includes(i)) {
            stack.push(i);
        } else {
            let last_element = stack.pop();
            if (i !== brackets[last_element]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

let s = "([])";
console.log(validBrackets(s));