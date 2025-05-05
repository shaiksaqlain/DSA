//########################################################## COUNT DIGIITS ###############################################
function countDigits(n) {
    let count = 0
    while (n > 0) {
        n = parseInt(n / 10);
        count = count + 1
    }
    return count
}
// const n = 12345
// console.log(countDigits(n))
// console.log(parseInt(Math.log10(12345))+1);  Optimal opporach

//########################################################## REVERSE NUMBER ###############################################
function reverseNumber(n) {
    let result = 0;
    while (n > 0) {
        const r = n % 10;
        result = (result * 10) + r
        n = parseInt(n / 10);
    }
    return result
}
// const n = 12345
// console.log(reverseNumber(n))

//########################################################## CHECK PALINDROME ###############################################
function checkPalindrome(n) {
    let result = 0;
    const duplicate = n
    while (n > 0) {
        const r = n % 10;
        result = (result * 10) + r
        n = parseInt(n / 10);
    }
    if (duplicate == result) return true
    else return false
}
// const n = 12321
// console.log(checkPalindrome(n))


//########################################################## GCD/HCF ###############################################
//Better Approach
function GCD(n, m) {
    for (let index = Math.min(n, m); index > 1; index--) {
        if (n % index == 0 && m % index == 0) {
            return index
        }
    }
}

//Optimal Approach by Euclidean Algorithm 
function GCDbyEA(a, b) {
    while (a > 0 && b > 0) {
        if (a > b) {
            a = a % b
        } else {
            b = b % a
        }
    }
    if (a == 0) {
        return b
    }
    return a
}


// const n = 9, m = 12
// console.log(GCDbyEA(n, m))

//########################################################## ARMSTRONG OR NOT ###############################################
function armstrongNumber(n) {
    let result = 0;
    const duplicate = n
    while (n > 0) {
        const r = n % 10;
        result = result + (r * r * r)
        n = parseInt(n / 10);
    }
    if (duplicate == result)
        return true
    return false
}

// const n = 153;
// console.log(armstrongNumber(n))

//########################################################## ALL DIVISORS ###############################################

// brute force Approach
function allDivisiors(n) {
    let result = [];
    for (let index = 1; index <= n; index++) {
        if (n % index == 0) {
            result.push(index)
        }
    }
    return result;
}

// better approach
function allDivisiors1(n) {
    let result = [];
    for (let index = 1; index <= Math.sqrt(n); index++) {
        if (n % index == 0) {
            result.push(index)
            if (n % index != index) {
                result.push(n % index)
            }
        }

    }
    return result;
}

// const n = 36;
// console.log(allDivisiors(n))



//########################################################## PRIME OR NOT ###############################################

// brute force Approach
function checkPrime(n) {
    let count = 0
    for (let index = 1; index <= n; index++) {
        if (n % index == 0) {
            count += 1
        }
    }
    if (count > 2) {
        return false
    }
    return true;
}

// better approach
function checkPrime1(n) {
    let count = 0
    for (let index = 1; index <= Math.sqrt(n); index++) {
        if (n % index == 0) {
            count += 1
            if (n % index != index) {
                count += 1
            }
        }

    }
    if (count > 2) {
        return false
    }
    return true;
}
// const n = 5;
// console.log(checkPrime1(n))