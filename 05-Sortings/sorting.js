//########################################################## selection sort ###############################################
//i=0
//find the minimum value in array, start inner loop from j=i+1
//keep min value in array[i] position. array[i] value in min position.
// increment i by 1

function selectionSort(array) {

    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }
        [array[min], array[i]] = [array[i], array[min]]
    }
    return array
}

const ls = [5, 4, 3, 2, 1]
const sortedArray = selectionSort(ls)
console.log(sortedArray);