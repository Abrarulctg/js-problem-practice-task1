//Generate a random number between 10 to 20.

function randomNum() {
    let randomNum = Math.floor(Math.random() * 20) + 10;
    if (randomNum > 20) {
        let randomN = Math.floor(Math.random() * 20) + 10;
        randomNum = randomN;
    }
    // if (randomNum < 20) {
    //     return randomNum;
    // }
    else {
        return randomNum;
    }
    // return randomN;
    // if(number )
}

// const res = Math.floor(Math.random() * 5);
// const res = Math.floor(Math.random() * 20) + 10;
const result = randomNum();
console.log(result);

