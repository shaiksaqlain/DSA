//########################################################## Print name N times using recursion ###############################################

function printName(i, n) {
    if (i > n) {
        return;
    }
    console.log("Hey lucifer");
    printName(i + 1, n)

}
// printName(1, 5);

//########################################################## PRINT UPTO N ###############################################

function printUptoN(i, n) {
    if (i > n) {
        return;
    }
    console.log(i);
    printUptoN(i + 1, n)

}
// const n = 5
// printUptoN(1, n);


//########################################################## PRINT UPTO N ###############################################
function printNtoOne(i, n) {
    if (i < 1) {
        return;
    }
    console.log(i);
    printNtoOne(i - 1, n)

}
// const n = 5
// printNtoOne(n);


//########################################################## PRINT UPTO N ###############################################

function sumOfNatural(i, n, sum) {
    if (i > n) {
        return sum;
    }
    sum = sum + i
    const result = sumOfNatural(i + 1, n, sum)
    return result
}
// const n = 5
// let i = 1
// let sum = 0
// console.log(sumOfNatural(i, n, sum));



//########################################################## Factorial of N numbers ###############################################

function factorialofNnumbers(i, n, sum) {
    if (i > n) {
        return factorail;
    }
    factorail = factorail * i
    const result = factorialofNnumbers(i + 1, n, factorail)
    return result
}
// const n = 5
// let i = 1
// let factorail = 1
// console.log(factorialofNnumbers(i, n, factorail));



//########################################################## ALL DIVISORS ###############################################

function findDivisors(i, n, ls) {
    if (i > Math.sqrt(n)) {
        return ls;
    }
    if (n % i == 0) {
        ls.push(i)
        if (n % i != i) {
            ls.push(n % i)
        }
    }
    const result = findDivisors(i + 1, n, ls)
    return result
}
// const n = 36
// let i = 1
// let ls = []
// console.log(findDivisors(i, n, ls));



//########################################################## Reverse array ###############################################

function reverseArray(l, r, ls) {
    if (l > r) {
        return ls;
    }

    const temp = ls[l]
    ls[l] = ls[r]
    ls[r] = temp

    const result = reverseArray(l + 1, r - 1, ls)
    return result
}

// const ls = [1, 2, 3, 4, 5]
// let l = 0, r = ls.length - 1;
// console.log(reverseArray(l, r, ls));



//########################################################## String Palindrome ###############################################
function reverseString(r, str, revStr) {
    if (r < 0) {
        return revStr;
    }
    revStr = revStr + str[r]
    const result = reverseString(r - 1, str, revStr)
    return result
}
function checkPalindrome(r, str, revStr) {
    revStr = reverseString(r, str, revStr)
    if (str == revStr) {
        return true
    } else {
        return false
    }
}

// const str = "saqlqas";
// let revStr = "", r = str.length - 1;
// console.log(checkPalindrome(r, str, revStr));


//########################################################## Fibonacci Number ###############################################



function fibanacci(n) {
    if (n <= 1)
        return n;
    const last = fibanacci(n - 1);
    const secondLast = fibanacci(n - 2);
    return last + secondLast;
}

const n = 10
console.log(fibanacci(n));
