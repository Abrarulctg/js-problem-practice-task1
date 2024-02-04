//Write a function to count the number of vowels in a string.

function checkVowels(string) {
    // console.log(string);
    let hasVowel = 0;
    for (const str of string) {
        // console.log(str);
        if (str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u') {
            // console.log('1');
            hasVowel = hasVowel + 1;
        }
    }
    return hasVowel;
}

const aString = "amar sonar bangla, ami tomai vlobashi, cirodin tomar akash tomar basash, alo kocu, komola, potol, petrol, octen, banaa, papaya, mango, watermalon, orange, lemon etc."

const smallStr = 'education';

const result = checkVowels(smallStr);

console.log(result);