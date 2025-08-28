//#################################### Check for Anagrams  ###############################################
function isAnagram(s1, s2) {
    if (s1.length !== s2.length) return false;

    const count = {};
    for (let i = 0; i < s1.length; i++) {
        count[s1[i]] = (count[s1[i]] || 0) + 1
    }

    for (let i = 0; i < s2.length; i++) {
        if (!count[s2[i]]) return false
        count[s2[i]]--
    }
    return true
}

// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("hello", "bello"));   // false


//#################################### Count and say  ###############################################
function countAndSay(n) {
    if (n == 1) return 1;
    let result = "1";
    for (let i = 2; i < n; i++) {
        let nextTerm = '';
        let count = 1
        for (let j = 0; j < result.length; j++) {
            if (result[j] == result[j + 1]) {
                count++
            } else {
                nextTerm += count.toString() + result[j]
            }

        }
        result = nextTerm
    }
    return result
}


// Test
console.log(countAndSay(1)); // "1"
// console.log(countAndSay(4)); // "1211"
// console.log(countAndSay(5)); // "111221"
// console.log(countAndSay(6)); // "312211"

//#################################### Compare version numbers  ###############################################

function compareVersion(version1, version2) {
    const v1 = version1.split('.').map(Number)
    const v2 = version2.split('.').map(Number)
    const n = Math.max(v1.length, v2.length)
    for (let i = 0; i < n; i++) {
        const v1Current = i < v1.length ? v1[i] : 0;
        const v2Current = i < v2.length ? v2[i] : 0;
        if (v1Current > v2Current) return 1;
        if (v1Current < v2Current) return -1;
    }
    return 0;
}

// Test Cases
// console.log(compareVersion("1.01", "1.001"));  // 0
// console.log(compareVersion("1.0", "1.0.0"));   // 0
// console.log(compareVersion("0.1", "1.1"));     // -1
// console.log(compareVersion("1.0.1", "1"));     // 1