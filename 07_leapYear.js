const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

//rxamples
console.log(`Is 2024 a leap year? ${isLeapYear(2024)}`);
console.log(`Is 2000 a leap year? ${isLeapYear(2000)}`);
console.log(`Is 1900 a leap year? ${isLeapYear(1900)}`);
console.log(`Is 2023 a leap year? ${isLeapYear(2023)}`);