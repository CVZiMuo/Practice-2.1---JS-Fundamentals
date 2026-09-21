//I initiate the function
function fizzBuzz() {
    //Goes through 1 until 100, and i use the conditionals to tell if it's a multiple or 3 or 5 using %
    for (let i = 1; i <= 100; i++) {
        let output = ""; //I iniate the variable in String to fill later if it's Fizz or Fuzz
        
        if (i % 3 === 0) {
            output += "Fizz";
        }
        if (i % 5 === 0) {
            output += "Buzz";
        }
        
        console.log(output || i); //I show it on the console
    }
}

fizzBuzz(); //This activates the function