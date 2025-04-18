// Is Anagram
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true
// Example 2:

// Input: s = "jar", t = "jam"

// Output: false
// Constraints:

// s and t consist of lowercase English letters.

// https://www.youtube.com/watch?v=9UtInBqnCgA

const s = "jar"
const t = "jam"

function anagram(s, t) {
    let hashOfS = {}
    let hashOfT = {}
    if (s.length != t.length)
        return false

    for (let index = 0; index < s.length; index++) {
        hashOfS[s[index]] = 1 + (hashOfS[s[index]] || 0);
        hashOfT[t[index]] = 1 + (hashOfT[t[index]] || 0);
    }

    for (let index = 0; index < s.length; index++) {
        if (hashOfS[s[index]] != hashOfT[s[index]]) {
            return false
        }
        if (hashOfS[t[index]] != hashOfT[t[index]]) {
            return false
        }
    }
    return true;
}

console.log(anagram(s, t));

