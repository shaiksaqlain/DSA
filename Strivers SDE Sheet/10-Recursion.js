//#################################### Subset Sum : Sum of all Subsets ###############################################

function subsetSums(array) {
    const result = [];
    function helper(index, currentSum) {
        if (index == array.length) {
            return result.push(currentSum);
        }

        helper(index + 1, currentSum + array[index])
        helper(index + 1, currentSum)
    }

    helper(0, 0)
    return result.sort()
}
// const array = [5, 2, 1];
// console.log(subsetSums(array));


//#################################### Subset Two ###############################################

function subsetTwo(array) {
    array = array.sort();
    const result = [];
    function backtrack(start, subset) {
        result.push([...subset]);
        for (let i = start; i < array.length; i++) {
            if (i > start && array[i] == array[i - 1]) continue;
            subset.push(array[i])
            backtrack(i + 1, subset)
            subset.pop();
        }
    }
    backtrack(0, [])
    return result
}

// const array = [1, 2, 2];
// console.log(subsetTwo(array));


//#################################### Combination One ###############################################



function combinationOne(array) {
    const result = [];
    function backtrack(start, combination, total) {
        if (total == target) {
            result.push([...combination]);
        }
        if (total > target) return;

        for (let i = start; i < array.length; i++) {
            combination.push(array[i]);
            backtrack(i, combination, total + array[i]);
            combination.pop();
        }
    }
    backtrack(0, [], 0);
    return result
}


// const array = [2, 3, 6, 7], target = 7;
// console.log(combinationOne(array));



//#################################### Combination Two ###############################################

function combinationTwo(array) {
    const result = []
    array = array.sort();
    function backtrack(start, combination, total) {
        if (total == target) {
            result.push([...combination]);
        }
        if (total > target) return;

        for (let i = start; i < array.length; i++) {
            if (i > start && array[i] == array[i - 1]) continue;
            combination.push(array[i]);
            backtrack(i + 1, combination, total + array[i]);
            combination.pop();
        }
    }
    backtrack(0, [], 0)
    return result
}

// const array = [10, 1, 2, 7, 6, 1, 5], target = 8;
// console.log(combinationTwo(array));

//#################################### Palindrome Partitioning ###############################################

function isPalindrome(str, start, end) {
    while (start < end) {
        if (str[start] !== str[end]) {
            return false
        }
        start++
        end--
    }
    return true;
}

function palindromePartion(str) {
    const result = [];
    function backtrack(start, palindromes) {
        if (start == str.length) {
            result.push([...palindromes])
            return;
        }
        for (let end = start; end < str.length; end++) {
            if (isPalindrome(str, start, end)) {
                palindromes.push(str.substring(start, end + 1));
                backtrack(end + 1, palindromes);
                palindromes.pop()
            }
        }
    }
    backtrack(0, [])
    return result;
}

// const str = 'aab';
// console.log(palindromePartion(str));



//####################################  Find K-th Permutation Sequence #################################### 

function PermutationSequence(n, k) {
    const numbers = [];
    const factorial = [1]
    for (let i = 1; i <= n; i++) {
        numbers[i - 1] = i
        factorial[i] = factorial[i - 1] * i
    }
    let result = '';
    k--;
    for (let i = n; i > 0; i--) {
        const digitIndex = Math.floor(k / factorial[i - 1]);
        result += numbers[digitIndex];
        numbers.splice(digitIndex, 1);
        k %= factorial[i - 1];
    }
    return result;
}

// const n = 4, k = 9
// console.log(PermutationSequence(n, k));


//####################################  Print all permutations of a string/array #################################### 

function printAllPermuntation(array) {
    const result = [];
    function backtrack(start) {
        if (start == array.length) {
            return result.push([...array])
        }
        for (let end = start; end < array.length; end++) {
            [array[start], array[end]] = [array[end], array[start]];
            backtrack(end + 1);
            [array[start], array[end]] = [array[end], array[start]];

        }
    }
    backtrack(0);
    return result;
}

// const array = [1, 2, 3];
// console.log(printAllPermuntation(array));


//####################################  N Queens #################################### 


function sloveNQueens(n) {
    const board = Array.from({ length: n }, () => Array(n).fill('.'))
    const soltions = [];

    function isQueenSafe(row, col) {
        // check column
        for (let i = 0; i < row; i++) {
            if (board[i][col] == 'Q') return false
        }
        // check left dailognal
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 'Q') return false
        }
        // check right dailognal
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] == 'Q') return false
        }
        return true
    }

    function backtrack(row) {
        if (row == n) {
            soltions.push(board.map((r) => r.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isQueenSafe(row, col)) {
                board[row][col] = 'Q'
                backtrack(row + 1)
                board[row][col] = '.'
            }
        }
    }
    backtrack(0)
    return soltions;
}

const n = 4;
console.log(sloveNQueens(n));