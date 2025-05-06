// Encode and decode the given array
// Input =['hello', 'world']
// Output =['hello', 'world']

const array = ['hello', 'world']

function encodeArray() {
    let encodedString = '';
    for (let index = 0; index < array.length; index++) {
        encodedString = encodedString + array[index].length + '#' + array[index]
    }
    return encodedString;
}
function decodeArray(encodedData) {
    let result = [];
    for (let index = 0; index < encodedData.length; index++) {
        const wordLength = parseInt(encodedData[index])
        result.push(encodedData.substr(index + 2, wordLength))
        index = index + 1 + wordLength
    }
    return result
}
const encodedData = encodeArray(array)
console.log(encodedData);


const decodedData = decodeArray(encodedData)
console.log(decodedData);
