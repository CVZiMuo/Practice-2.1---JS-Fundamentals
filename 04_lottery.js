const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const lottery = new Set();

console.log("Numbers (5 digits):");
while (lottery.size < 10) {
    const number = getRandomNumber(10000, 99999);
    lottery.add(number);
}

lottery.forEach(number => {
    console.log(number);
});