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
        result.pushI([...subset])

        for (let i = start; i < array.length; i++) {
            if (i > start && array[i] == array[i - 1]) continue;

            subset.push([array[i]]);
            backtrack(i + 1, subset);
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
    const result = []

    function backtrack(start, combination, total) {
        if (total == target) {
            result.push([...combination])
        }

        if (total > target) return;
        for (let i = start; i < array.length; i++) {
            combination.push(array[i])
            backtrack(i, combination, total + array[i])
            combination.pop();
        }
    }
    backtrack(0, [], 0)
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
            result.push([...combination])
        }

        if (total > target) return;
        for (let i = start; i < array.length; i++) {
            if (i > start && array[i] == array[i - 1]) continue; // Add condition
            combination.push(array[i])
            backtrack(i + 1, combination, total + array[i]) // Do i+1
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
    function backtrack(start, panlindrome) {
        if (start == str.length) {
            result.push([...panlindrome]);
            return;
        }

        for (let end = start; end < str.length; end++) {
            if (isPalindrome(str, start, end)) {
                panlindrome.push(str.substring(start, end + 1))
                backtrack(end + 1, panlindrome)
                panlindrome.pop()
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
    for (let index = 1; index <= n; index++) {
        numbers.push(index);
    }
    const factorial = [1];
    for (let index = 1; index <= n; index++) {
        factorial[index] = factorial[index - 1] * index
    }
    k--
    let result = ''
    for (let i = n; i >= 1; i--) {
        const index = Math.floor(k / factorial[i - 1]);
        result += numbers[index];
        numbers.splice(index, 1);
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
        if (start === array.length) {
            return result.push([...array]);
        }
        for (let i = start; i < array.length; i++) {
            [array[start], array[i]] = [array[i], array[start]];
            backtrack(start + 1);
            [array[start], array[i]] = [array[i], array[start]];

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
        for (let i = 0; i < row; i++) {
            if (board[i][col] == 'Q') return false
        }

        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 'Q') return false
        }
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