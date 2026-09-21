function multiplicationTable(number) {
    console.log(`Multiplication table of ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
    console.log(""); //separation
}

//using the function for going through the numbers
for (let num = 1; num <= 10; num++) {
    multiplicationTable(num);
}