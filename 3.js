function check(str) {
    const stack = [];
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];

      if (char === '(') {
        stack.push('(');
      } else if (char === ')') {
        if (stack.length === 0) {
          return 0;
        } else {
          stack.pop();
        }
      }

    }
  
    return stack.length === 0 ? 1 : 0;
  }

  console.log(check(")(")) //0
  // console.log(check("(())")) //1
  // console.log(check("())")) //0
  