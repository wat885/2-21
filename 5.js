function check(str) {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            const lastChar = stack.pop();
            console.log(char, lastChar)
            if (
                (char === ')' && lastChar !== '(') ||
                (char === ']' && lastChar !== '[') ||
                (char === '}' && lastChar !== '{')
            ) {
                return 0;
            }
        } else {
            return 0;
        }
        console.log(stack)
    }


    return stack.length === 0 ? 1 : 0;
}


// console.log(check("[]{}()")); // 1
console.log(check("([]{}())")); // 1
// console.log(check("({)}[]")); // 0
// console.log(check("[{()}]")); // 1

