function christmas(height) {
  let width = height + 1
  let tree = ""
  let brach = ""

  for (let i = 1; i <= width; i++) {
    tree +=
      " ".repeat(width / 2 + width - i) +
      "*".repeat(i + (i - 1)) +
      "\n";

    if (height !== 1) {
      if (i <= width / 2) {
        brach +=
          " ".repeat(width / 2 + width - i) +
          "*".repeat(i + (i - 1)) +
          "\n";
      }
    }
  }

  console.log(tree + brach);
}


christmas(1);
//  *
// ***
// 
christmas(2);
//   *
//  ***
// *****
//   *
christmas(3);
christmas(4);


