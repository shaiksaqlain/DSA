//#################################### Trapping Rainwater ###############################################

function trappingRainwaterv1(heights) {
    const len = heights.length - 1
    const prefixMax = [heights[0]];
    let suffixMax = [heights[len]];
    for (let i = 1; i <= len; i++) {
        prefixMax[i] = Math.max(prefixMax[i - 1], heights[i])
        suffixMax[i] = Math.max(suffixMax[i - 1], heights[len - i])
    }
    suffixMax = suffixMax.reverse()
    let total = 0;
    for (let i = 0; i < heights.length; i++) {
        total = total + (Math.min(prefixMax[i], suffixMax[i]) - heights[i])
    }
    return total;
}
function trappingRainwaterv2(heights) {
    let l = 0, r = heights.length - 1;
    let leftMax = 0, rightMax = 0, total = 0;
    while (l < r) {
        if (heights[l] <= heights[r]) {
            if (heights[l] > leftMax) {
                leftMax = heights[l]
            } else {
                total += leftMax - heights[l]
            }
            l++
        } else {
            if (heights[r] > rightMax) {
                rightMax = heights[r];
            } else {
                total += rightMax - heights[r];
            }
            r--
        }
    }
    return total
}

// const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// console.log(trappingRainwaterv2(heights));  //6

//#################################### remove duplicates ###############################################

function removeDuplicates(array) {
    let i = 0, j = 1;
    while (j < array.length) {
        if (array[j] != array[i]) {
            array[i + 1] = array[j]
            i++
        }
        j++
    }
    return array.slice(0, i + 1);
}

// const array = [1, 1, 2, 2, 2, 3, 3, 4, 5, 6, 7,];
// console.log(removeDuplicates(array));



//#################################### Count Maximum Consecutive One's in the array ###############################################

function countNumberOfConsecutiveOnes(array) {
    let count = 0, max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 1) {
            count++
        } else {
            count = 0
        }
        max = Math.max(count, max)

    }
    return max;
}

// const array = [1, 0, 1, 1, 0, 1];
// console.log(countNumberOfConsecutiveOnes(array));