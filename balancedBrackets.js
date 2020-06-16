function balancedBrackets(str) {
    let stack = [];

    let pair = {
        '(': ')',
        '[': ']',
        '{': '}',
        '|': '|'
    };

    for(let i = 0; i < str.length; i++) {
        let j = i + 1;
        let k = str.length - 1;

        if(str[i] === '(' || str[i] === '[' || str[i] === '{' || str[i] === '|') {
            stack.push(str[i]);
        } else if(str[i] === ')' || str[i] === ']' || str[i] === '}' || str[i] === '|') {
            let last = stack.pop();
            if(str[i] !== pair[last]) {
                return false;
            }
        }
    }

    if(stack.length !== 0) {
        return false;
    }

    return true;
}