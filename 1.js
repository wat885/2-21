function sortNumber(array) {
    const sortArray = array.sort((a, b) => b - a) 
    const min = [sortArray[0], sortArray[1], sortArray[2]]
    const max = [sortArray[sortArray.length - 1], sortArray[sortArray.length - 2], sortArray[sortArray.length - 3]]

    return { sortArray, max, min }
}

console.log(sortNumber([5, 7, 9, 12, 0, -1, 7, 12]))
// { sortArray: [ 12, 12, 9, 7, 7, 5, 0, -1 ],
//     max: [ -1, 0, 5 ],
//     min: [ 12, 12, 9 ] }