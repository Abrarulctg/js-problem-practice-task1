// You are given an array of numbers. Count how many times the a number is repeated in the array.

function repeatedNum(numbers, rep) {
    let find = 0;
    for (const number of numbers) {
        // console.log(number)
        if (number === rep) {
            find = find + 1;
        }
    }
    console.log(find);
}

const numbers = [5, 6, 11, 12, 98, 5, 56, 11, 5];
repeatedNum(numbers, 555);
// console.log();