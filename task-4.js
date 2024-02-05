// Write a function to find the longest word in a given string.
function findLongWord(string) {
    let arrString = string.split(' ')
    let largest = arrString[0];
    for (const str of arrString) {
        if (str.length > largest.length) {
            largest = str;
        }
    }
    console.log(largest)
}
// sentence.split(' ')

const sentence = 'I am learning Programming to become a programmer';
// console.log(sentence.split(' '));
findLongWord(sentence)