//#################################### Reverse Words in a String  ###############################################

function reverseWords(str) {
    let result = '';
    let startFrom = str.length;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] == ' ') {
            if (i + 1 !== startFrom) {
                result += str.substring(i + 1, startFrom) + ' ';
            }
            startFrom = i;
        }

    }
    result = result + str.substring(0, startFrom);
    return result
}

// const str = "the  sky is  blue";
// console.log(reverseWords(str));



//#################################### Longest Palindrome in a string  ###############################################

function longestPalindrome(str) {
    if (str.length < 2) return str;
    let start = 0, maxLength = 1;

    function expandFromCenter(left, right) {
        while (left > 0 && right < str.length && str[left] === str[right]) {
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1
                start = left;
            }
            left--
            right++
        }
    }
    for (let i = 0; i < str.length; i++) {
        //odd
        expandFromCenter(i, i)
        //even
        expandFromCenter(i, i + 1)
    }
    return str.substring(start, start + maxLength)
}


const str = "babad";
// const str = "cbbd";
// console.log(longestPalindrome(str));


//#################################### Roman to integer ###############################################


function romanToInt(s) {
    const romanMap = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let current = romanMap[s[i]]
        let next = romanMap[s[i + 1]]

        if (next && next > current) {
            total -= current;
        } else {
            total += current
        }
    }

    return total;
}

// console.log(romanToInt("MCMXCIV")); // 1994
// console.log(romanToInt("LVIII"));   // 58


//####################################  integer to Roman  ###############################################

function intToRoman(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let roman = "";

    for (let i = 0; i < values.length; i++) {
        while (num > values[i]) {
            num -= values[i]
            roman += symbols[i]
        }

    }

    return roman;
}

// console.log(intToRoman(1994)); // "MCMXCIV"
// console.log(intToRoman(58));   // "LVIII"


//####################################  Longest Common Prefix  ###############################################

function logestCommanPrifix(strings) {
    let result = '';
    for (let i = 0; i < strings[0].length; i++) {
        for (const string of strings) {
            if (i >= string.length || string[i] != strings[0][i]) {
                return result
            }
        }
        result += strings[0][i]
    }
    return result;
}


const strings = ["flower", "flow", "flight"]
console.log(logestCommanPrifix(strings));
