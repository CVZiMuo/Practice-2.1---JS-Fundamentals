const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log("Numbers between 0 & 99999:");
for (let i = 0; i < 10; i++) {
    console.log(getRandomNumber(0, 99999));
}

console.log("\nNumbers between 10 & 40:");
for (let i = 0; i < 10; i++) {
    console.log(getRandomNumber(10, 40));
}

console.log("\nNumbers between 18 & 90:");
for (let i = 0; i < 10; i++) {
    console.log(getRandomNumber(18, 90));
}

console.log("\nNumbers between 1980 & 2020:");
for (let i = 0; i < 10; i++) {
    console.log(getRandomNumber(1980, 2020));
}