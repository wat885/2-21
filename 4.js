function countDuplicates(array) {
    const sortArray = array.sort((a, b) => b - a)
    const uniqueChars = [...new Set(sortArray)];
    let answer = []

    for (let index = 0; index < uniqueChars.length; index++) {
        answer = [...answer, { [ uniqueChars[index]] : uniqueChars.length - index - 1 }]
    }

    return  answer 
}

console.log(countDuplicates([8, 4, 3, 1, 2, 2]
))

console.log(countDuplicates([9,16,3,3,9,1,-1,-1]))