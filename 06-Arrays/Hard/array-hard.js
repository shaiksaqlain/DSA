//####################################### Find the elements that appears more than N/3 times in the array ########################################
function findNBy3(array) {
    let element1 = null, element2 = null, count1 = 0, count2 = 0;
    for (let i = 0; i < array.length; i++) {
        if (count1 == 0 && array[i] != element2) {
            element1 = array[i]
            count1++
        } else if (count2 == 0 && array[i] != element1) {
            element2 = array[i]
            count2++
        } else if (array[i] == element1) {
            count1++
        } else if (array[i] == element2) {
            count2++
        } else {
            count1--
            count2--
        }
    }
    count1 = 0, count2 = 0
    for (let index = 0; index < array.length; index++) {
        if (array[index] == element1) count1++
        if (array[index] == element2) count2++
    }
    const majorityCheck = Math.floor(array.length / 3);
    const result = []
    if (count1 > majorityCheck && element1 != null)
        result.push(element1)
    if (count2 > majorityCheck && element2 != null)
        result.push(element2)
    return result;
}
// const array = [0, 0, 0]
// const array = [11, 33, 33, 11, 33, 11]
// console.log(findNBy3(array))

//####################################### 3 Sum : Find triplets that add up to a zero ########################################

function threeSum(array) {
    const result = []
    array = array.sort()
    for (let i = 0; i < array.length; i++) {
        if (i > 0 && array[i] == array[i - 1]) continue
        let j = i + 1, k = array.length - 1
        while (j < k) {
            const sum = array[i] + array[j] + array[k]
            if (sum === 0) {
                result.push([array[i], array[j], array[k]])
                j++
                k--
                while (j < k && array[j] == array[j - 1]) continue
                while (j < k && array[k] == array[k - 1]) continue
            } else if (sum > 0) {
                k--
            } else {
                j++
            }
        }
    }
    return result;
}

//t0 -> [-1, 0, 1, 2, -1, -4]
//t1 -> [1, 2, 3, 4]
//t2 -> [0, 0, 0, 0]
// const array = [-1, 0, 1, 2, -1, -4]
// console.log(threeSum(array))




//####################################### 4 Sum | Find Quads that add up to a target value ########################################

function fourSum(array, target) {
    const result = []
    array = array.sort((a, b) => a - b)
    for (let i = 0; i < array.length - 3; i++) {
        if (i > 0 && array[i] == array[i - 1]) continue
        for (let j = i + 1; j < array.length - 2; j++) {
            if (j > i + 1 && array[j] == array[j - 1]) continue
            let k = j + 1, l = array.length - 1
            while (k < l) {
                const sum = array[i] + array[j] + array[k] + array[l]
                if (sum === target) {
                    result.push([array[i], array[j], array[k], array[l]])
                    k++
                    l--
                    while (k < l && array[k] == array[k - 1]) k++
                    while (k < l && array[l] == array[l + 1]) l--
                } else if (sum > target) {
                    l--
                } else {
                    k++
                }
            }
        }
    }
    return result;
};
//t0 ->  [1,0,-1,0,-2,2], target = 0
//t1 ->  [4,3,3,4,4,2,1,2,1,1], target = 9
const array = [-1, 0, -5, -2, -2, -4, 0, 1, -2], target = -9
console.log(fourSum(array, target));