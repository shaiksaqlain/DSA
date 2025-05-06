//########################################################## Counting frequencies of array elements ###############################################

function findFrequency(array) {
    let frequencies = {}
    for (let index = 0; index < array.length; index++) {
        frequencies[array[index]] = (frequencies[array[index]] || 0) + 1
    }
    return frequencies
}

// const ls = [10, 2, 3, 2, 1, 2, 2, 3, 10]
// const n = 2
// const frequencies = findFrequency(ls)
// console.log(frequencies[n]);


//########################################################## Find highest repeated element ###############################################

function findMostRepeatedElement(array) {
    let frequencies = {}, max = 0, mostRepeated = 0;
    for (let index = 0; index < array.length; index++) {
        frequencies[array[index]] = (frequencies[array[index]] || 0) + 1
        if (frequencies[array[index]] > max) {
            max = frequencies[array[index]]
            mostRepeated = array[index]
        }
    }
    return mostRepeated
}

// const ls = [10, 2, 3, 2, 1, 2, 2, 3, 10]
// const mostRepeated = findMostRepeatedElement(ls)
// console.log(mostRepeated);


//########################################################## Find lowest repeated element ###############################################

function findLessRepeatedElement(array) {
    let frequencies = {};

    for (let index = 0; index < array.length; index++) {
        frequencies[array[index]] = (frequencies[array[index]] || 0) + 1
    }

    let lessRepeated = Infinity;
    for ([key, value] of Object.entries(frequencies)) {
        if (value < lessRepeated) {
            lessRepeated = value
        }
    }

    return lessRepeated
}

// const ls = [10, 2, 3, 2, 1, 2, 2, 3, 10, 10, 10]
// const mostRepeated = findLessRepeatedElement(ls)
// console.log(mostRepeated);