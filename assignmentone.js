// 1. Create a JavaScript Code to Print Hello World 

function task1() {
    document.getElementById('output').innerHTML = `
    <p>This task prints "Hello World" to the screen.</p>
    <h3>Hello World</h3>`;

}

// 2. Create a JavaScript Code to Add Two Numbers 

function task2() {
    let num1 = 4;
    let num2 = 6;
    let sum = num1 + num2;
    document.getElementById('output').innerHTML = `<p>This program adds two numbers ${num1} , ${num2} and displays the result .</p>
     <h3> Result: ${sum}</h3>`;
}

// 3. Create a JavaScript Code to Find the Square Root 

function task3() {
    let num = 25;
    let sqrt = Math.sqrt(num);
    document.getElementById('output').innerHTML = `
    <p> this task is to Find the Square Root of the given number ${num} . </p> 
    <h3>Square root of ${num} = ${sqrt}</h3>`
}

// 4. Create a JavaScript Code to Calculate the Area of a Triangle 

function task4() {
    let base = 5;
    let height = 10;
    let area = (base * height) / 2;
    document.getElementById('output').innerHTML = `<p> this task is to  Calculate the Area of a Triangle with base = ${base} and height = ${height} </p>
    <h3> The result is : ${area}`
}

// 5. Create a JavaScript Code to Solve Quadratic Equation 

function task5() {
    let a = 1, b = -3, c = 2;
    let discriminant = b * b - 4 * a * c;
    let result = '';
    if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result = `The roots are : ${root1} and ${root2}`;
    }
    else if (discriminant === 0) {
        let root = -b / (2 * a);
        result = `The root is: ${root} (Repeated Root)`;
    }
    else {
        result = 'No real roots';
    }
    document.getElementById('output').innerHTML =
        `<p>This task is to Solve the Quadratic Equation: 
    <br>
    ${a}x² + ${b}x + ${c} = 0</p>
     <h3> ${result}</h3>`
}

// 6. Create a JavaScript Code to Convert Kilometers to Miles 

function task6() {
    let Kilometers = 20;
    let Miles = Kilometers * 0.621371;
    document.getElementById('output').innerHTML = `
    <p>This task is to Convert ${Kilometers} Kilometers to Miles.</p>
    <h3>The result is: ${Miles.toFixed(3)} miles`
}

// 7. Create a JavaScript Code to Convert Celsius to Fahrenheit 

function task7() {
    let Celsius = 30;
    let Fahrenheit = (Celsius * 9 / 5) + 32;
    document.getElementById('output').innerHTML =
        `<p>This task is to Convert ${Celsius}°C to Fahrenheit.</p>
    <h3>The result is : ${Fahrenheit}°F <h3/>`
}

// 8. Create a JavaScript Code to Swap Two Variables 

function task8() {
    let a = 8;
    let b = 12;
    let beforeSwap = `Before Swap: a = ${a}, b = ${b}`;
    let temp = a;
    a = b;
    b = temp;
    let afterSwap = `After Swap: a = ${a}, b = ${b}`;
    document.getElementById('output').innerHTML = `
    <p>This task is to Swap Two Variables (a and b).</p>
    <p>${beforeSwap}</p>
    <h3>${afterSwap}</h3>
`;

}

// 9. Create a JavaScript Code to Generate a Random Number 

function task9() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('output').innerHTML = `
    <p>This task is to Generate a Random Number between 1 and 100.</p>
    <h3>The generated number is: ${randomNumber}</h3>
`;
}

// 10. Create a JavaScript Code to Check if a Number is Positive, Negative, or Zero 

function task10() {
    let number = -5; // the number that we will check it 
    let result = '';
    if (number > 0) {
        result = 'The number is Positive.';
    } else if (number < 0) {
        result = 'The number is Negative.';
    } else {
        result = 'The number is Zero.';
    }
    document.getElementById('output').innerHTML = `
    <p>This task is to Check if a Number (${number}) is Positive, Negative, or Zero.</p>
    <h3>${result}</h3>
`;
}

// 11. Create a JavaScript Code to Check if a Number is Odd or Even 

function task11() {
    let number = 10;
    let result = ``;
    if (number % 2 == 0) {
        result = `The number is even . `;
    }
    else {
        result = `The number is odd . `;
    }
    document.getElementById('output').innerHTML = `
        <p>This task is to Check if a Number (${number}) is Odd or Even.</p>
        <h3>${result}</h3>
    `;
}

// 12. Create a JavaScript Code to Find the Largest Among Three Numbers 

function task12() {
    let num1 = 20;
    let num2 = 50;
    let num3 = 91;
    let largest = '';
    if (num1 >= num2 && num1 >= num3) {
        largest = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
    } else {
        largest = num3;
    }
    document.getElementById('output').innerHTML = `
        <p>This task is to Find the Largest Among Three Numbers (${num1}, ${num2}, ${num3}).</p>
        <h3>The largest number is: ${largest}</h3>
    `;
}

// 13. Create a JavaScript Code to Check Prime Number 

function task13() {
    let number = 17;
    let isPrime = true;
    if (number <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    let result = isPrime ? 'Prime' : 'Not Prime';

    document.getElementById('output').innerHTML = `
        <p>This task is to Check if a Number (${number}) is Prime.</p>
        <h3>The number is: ${result}</h3>
    `;
}

// 14. Create a JavaScript Code to Print All Prime Numbers in an Interval 

function task14() {
    let start = 10;
    let end = 30;
    let primes = [];

    for (let num = start; num <= end; num++) {
        let isPrime = true;
        if (num <= 1) continue;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) primes.push(num);
    }

    document.getElementById('output').innerHTML = `
        <p>This task is to Print All Prime Numbers between ${start} and ${end}.</p>
        <h3>Prime Numbers: ${primes.join(', ')}</h3>
    `;
}

// 15. Create a JavaScript Code to Find the Factorial of a Number 

function task15() {
    let number = 5;
    let factorial = 1;


    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    document.getElementById('output').innerHTML = `
        <p>This task is to Find the Factorial of a Number (${number}).</p>
        <h3>The factorial is: ${factorial}</h3>
    `;
}

// 16. Create a JavaScript Code to Display the Multiplication Table 

function task16() {
    let number = 5;
    let table = '';

    for (let i = 1; i <= 10; i++) {
        table += `${number} × ${i} = ${number * i}<br>`;
    }

    document.getElementById('output').innerHTML = `
        <p>This task is to Display the Multiplication Table of ${number}.</p>
        <h3>${table}</h3>
    `;
}

// 17. Create a JavaScript Code to Print the Fibonacci Sequence 

function task17() {
    let n = 10;
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    document.getElementById('output').innerHTML = `
        <p>This task is to Print the First ${n} Numbers of the Fibonacci Sequence.</p>
        <h3>${fib.join(', ')}</h3>
    `;
}

// 18. Create a JavaScript Code to Find Armstrong Number in an Interval 

function task18() {
    let start = 100, end = 500;
    let armstrongNumbers = [];

    for (let num = start; num <= end; num++) {
        let sum = 0;
        let temp = num;
        let digits = num.toString().length;
        while (temp > 0) {
            let digit = temp % 10;
            sum += Math.pow(digit, digits);
            temp = Math.floor(temp / 10);
        }

        if (sum === num) {
            armstrongNumbers.push(num);
        }
    }

    document.getElementById('output').innerHTML = `
        <p>This task is to Find Armstrong Numbers between ${start} and ${end}.</p>
        <h3>${armstrongNumbers.join(', ')}</h3>
    `;
}

// 19. Create a JavaScript Code to Print Fibonacci Sequence Using Recursion 

function task19() {
    let n = 10;
    let sequence = [];
    let memo = {};

    function fibonacci(num) {
        if (num in memo) return memo[num];
        if (num === 0) return 0;
        if (num === 1) return 1;
        memo[num] = fibonacci(num - 1) + fibonacci(num - 2);
        return memo[num];
    }

    for (let i = 0; i < n; i++) {
        sequence.push(fibonacci(i));
    }

    document.getElementById('output').innerHTML = `
        <p>This task is to Print the First ${n} Numbers of the Fibonacci Sequence using Recursion with Memoization.</p>
        <h3>${sequence.join(', ')}</h3>
    `;
}

// 20. Create a JavaScript Code to Find Factorial of Number Using Recursion 

function task20() {
    let number = 5;
    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1);
    }

    let result = factorial(number);

    document.getElementById('output').innerHTML = `
        <p>This task is to Find the Factorial of ${number} using Recursion.</p>
        <h3>The factorial is: ${result}</h3>
    `;
}

// 21. Create a JavaScript Code to Make a Simple Calculator 

function task21() {
    let num1 = 10;
    let num2 = 30;
    let operator = '+';
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
            break;
        default:
            result = 'Invalid operator';
    }
    document.getElementById('output').innerHTML = `
        <p>This task is to Make a Simple Calculator for
        <br>
        ${num1} ${operator} ${num2}.</p>
        <h3>The result is: ${result}</h3>
    `;
}

// 22. Create a JavaScript Code to Find the Sum of Natural Numbers 

function task22() {
    let n = 10;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    document.getElementById('output').innerHTML = `
        <p>This task is to Find the Sum of the First ${n} Natural Numbers using Iteration.</p>
        <h3>The sum is: ${sum}</h3>
    `;
}

// 23. Create a JavaScript Code to Find the Sum of Natural Numbers Using Recursion 

function task23() {
    let n = 10;

    function sumNatural(num) {
        if (num === 0) return 0;
        return num + sumNatural(num - 1);
    }

    let result = sumNatural(n);

    document.getElementById('output').innerHTML = `
        <p>This task is to Find the Sum of the First ${n} Natural Numbers using Recursion.</p>
        <h3>The sum is: ${result}</h3>
    `;
}

// 24. Create a JavaScript Code to Check if the Numbers Have Same Last Digit 

function task24() {
    let num1 = 27;
    let num2 = 57;
    let num3 = 77;

    let lastDigit1 = num1 % 10;
    let lastDigit2 = num2 % 10;
    let lastDigit3 = num3 % 10;

    let result = (lastDigit1 === lastDigit2 && lastDigit2 === lastDigit3)
        ? 'All numbers have the same last digit.'
        : 'The numbers do not have the same last digit.';

    document.getElementById('output').innerHTML = `
        <p>This task is to Check if the Numbers (${num1}, ${num2}, ${num3}) Have the Same Last Digit.</p>
        <h3>${result}</h3>
    `;
}

// 25. Create a JavaScript Code to Find HCF or GCD 

function task25() {
    let num1 = 48;
    let num2 = 18;
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    let result = gcd(num1, num2);

    document.getElementById('output').innerHTML = `
        <p>This task is to Find the HCF (GCD) of ${num1} and ${num2}.</p>
        <h3>The HCF (GCD) is: ${result}</h3>
    `;
}

// 26. Create a JavaScript Code to Find LCM 

function task26() {
    let num1 = 12;
    let num2 = 18;

    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    let lcm = (num1 * num2) / gcd(num1, num2);

    document.getElementById('output').innerHTML = `
        <p>This task is to Find the LCM of ${num1} and ${num2}.</p>
        <h3>The LCM is: ${lcm}</h3>
    `;
}

// 27. Create a JavaScript Code to Find the Factors of a Number 

function task27() {
    let number = 28;
    let factors = [];

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }

    document.getElementById('output').innerHTML = `
        <p>This task is to Find All the Factors of ${number}.</p>
        <h3>The factors are: ${factors.join(', ')}</h3>
    `;
}

// 28. Create a JavaScript Code to Guess a Random Number 

function task28() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let userGuess = 7;
    let result = (userGuess === randomNumber)
        ? 'Congratulations! You guessed it right!'
        : `Wrong guess. The correct number was ${randomNumber}.`;

    document.getElementById('output').innerHTML = `
        <p>This task is to Guess a Random Number between 1 and 10.</p>
        <h3>${result}</h3>
    `;
}

// 29. Create a JavaScript Code to Shuffle Deck of Cards 

function task29() {
    let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    let deck = [];

    for (let suit of suits) {
        for (let value of values) {
            deck.push(`${value} of ${suit}`);
        }
    }

    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    document.getElementById('output').innerHTML = `
        <p>This task is to Shuffle a Deck of Cards.</p>
        <h3>${deck.slice(0, 10).join('<br>')}</h3> 
    `;
}

// 30. Create a JavaScript Code to Find ASCII Value of Character 

function task30() {
    let character = 'A';
    let asciiValue = character.charCodeAt(0);

    document.getElementById('output').innerHTML = `
        <p>This task is to Find the ASCII Value of the Character '${character}'.</p>
        <h3>The ASCII value is: ${asciiValue}</h3>
    `;
}

// 31. Create a JavaScript Code to Check Whether a String is Palindrome or Not 

function task31() {
    let str = "Reem";
    let reversed = str.split('').reverse().join('');
    let result = (str == reversed) ? 'Palindrome' : 'Not a Palindrome';
    document.getElementById('output').innerHTML = `<p>This task is to check whether the string "${str}"
    is a Palindrome or not</p>
    <h3>The string is : ${result}</h3>`
}

// 32. Create a JavaScript Code to Sort Words in Alphabetical Order 

function task32() {
    let text = "banana apple cherry date";
    let words = text.split(' ').sort();
    document.getElementById('output').innerHTML = `
    <p> This task is to Sort Words in Alphabetical Order.</p>
    <p> Original text : ${text}</p>
    <h3> Sorted words : ${words.join(', ')}</h3>
    `;
}

// 33. Create a JavaScript Code to Replace Characters of a String 

function task33() {
    let text = "Javascript Assignment";
    let newText = text.replace('Assignment', 'Homework');
    document.getElementById('output').innerHTML = ` <p>This task is to Replace Characters in a String.</p>
        <p>Original Text: ${text}</p>
        <h3>New Text: 
        ${newText}</h3>
    `;
}

// 34. Create a JavaScript Code to Reverse a String 

function task34() {
    let text = "JavaScript";
    let reversed = text.split('').reverse().join('');
    document.getElementById('output').innerHTML = `
    <p>This task is to Reverse a String.</p>
    <p>Original Text: ${text}</p>
    <h3>Reversed Text: ${reversed}</h3>
`;
}

// 35. Create a JavaScript Code to Convert the First Letter of a String into UpperCase 

function task35() {
    let text = "welcome to our page";
    let capitalized = text.charAt(0).toUpperCase() + text.slice(1);
    document.getElementById('output').innerHTML = `
        <p>This task is to Convert the First Letter of a String into UpperCase.</p>
        <p>Original Text: ${text}</p>
        <h3>Capitalized Text: ${capitalized}</h3>
    `;
}

// 36. Create a JavaScript Code to Count the Number of Vowels in a String 

function task36() {
    let text = "Java script assignment";
    let vowels = text.match(/[aeiou]/gi);
    let count = vowels ? vowels.length : 0;

    document.getElementById('output').innerHTML = `
    <p>This task is to Count the Number of Vowels in a String.</p>
    <p>Text: ${text}</p>
    <h3>Number of Vowels: ${count}</h3>
   `;
}

// 37. Create a JavaScript Code to Create Multiline Strings 

function task37() {
    let multiline = `This is a 
    multiline
          string using
 template literals.`;

    document.getElementById('output').innerHTML = `
        <p>This task is to Create a Multiline String.</p>
        <h3>${multiline.replace(/\n/g, '<br>')}</h3>
    `;
}

// 38. Create a JavaScript Code to Create Objects in Different Ways 

function task38() {
    let obj1 = {};
    let obj2 = new Object();
    let obj3 = Object.create(Object.prototype);
    document.getElementById('output').innerHTML = `
    <p>This task is to Create Objects in Different Ways.</p>
    <h3>Object 1: ${JSON.stringify(obj1)}<br>
        Object 2: ${JSON.stringify(obj2)}<br>
        Object 3: ${JSON.stringify(obj3)}</h3>
`;
}   

// 39. Create a JavaScript Code to Check the Number of Occurrences of a Character in a String 

function task39() {
    let text = "Hello World !";
    let char = 'e';
    let count = text.split('').filter(c => c === char).length;

    document.getElementById('output').innerHTML = `
        <p>This task is to Count Occurrences of '${char}' in a String.</p>
        <p>Text: ${text}</p>
        <h3>Number of Occurrences: ${count}</h3>
    `;
}

// 40. Create a JavaScript Code to Remove a Property from an Object 

function task40() {
    let user = { name: "Reem", age: 22, city: "Ramallah" };
    delete user.age;
    document.getElementById('output').innerHTML = `
    <p>This task is to Remove a Property from an Object.</p>
    <h3>Result: ${JSON.stringify(user)}</h3>
`;
}

// 41. Create a JavaScript Code to Check if a Key Exists in an Object 

function task41() {
    let user = { name: "Reem", age: 22, city: "Ramallah" };
    let key = 'name';
    let exists = key in user;
    document.getElementById('output').innerHTML = `
        <p>This task is to Check if a Key Exists in an Object.</p>
        <h3>Key "${key}" Exists: ${exists}</h3>
    `;
}

// 42. Create a JavaScript Code to Clone a JS Object 

function task42() {
    let user = { name: "Reem", age: 22 };
    let clone = { ...user };

    document.getElementById('output').innerHTML = `
        <p>This task is to Clone a JS Object.</p>
        <h3>Cloned Object: ${JSON.stringify(clone)}</h3>
    `;
}

// 43. Create a JavaScript Code to Loop Through an Object 

function task43() {
    let user = { name: "Reem", age: 22, city: "Ramallah" };
    let entries = "";

    for (let key in user) {
        entries += `${key}: ${user[key]}<br>`;
    }

    document.getElementById('output').innerHTML = `
        <p>This task is to Loop Through an Object.</p>
        <h3>${entries}</h3>
    `;
}

// 44. Create a JavaScript Code to Merge Properties of Two Objects 

function task44() {
    let obj1 = { name: "Reem" };
    let obj2 = { age: 22, city: "Ramallah" };
    let merged = { ...obj1, ...obj2 };

    document.getElementById('output').innerHTML = `
        <p>This task is to Merge Properties of Two Objects.</p>
        <h3>Result: ${JSON.stringify(merged)}</h3>
    `;
}

// 45. Create a JavaScript Code to Count the Number of Keys/Properties in an Object 

function task45() {
    let user = { name: "Reem", age: 22, city: "Ramallah" };
    let count = Object.keys(user).length;

    document.getElementById('output').innerHTML = `
        <p>This task is to Count the Number of Keys/Properties in an Object.</p>
        <h3>Number of Keys: ${count}</h3>
    `;
}

// 46. Create a JavaScript Code to Add Key/Value Pair to an Object 

function task46() {
    let user = { name: "Reem" };
    user.age = 22;
    document.getElementById('output').innerHTML = `
        <p>This task is to Add a Key/Value Pair to an Object.</p>
        <h3>Updated Object: ${JSON.stringify(user)}</h3>
    `;
}

// 47. Create a JavaScript Code to Replace All Occurrences of a String 

function task47() {
    let text = "Welcome to our assignment page ";
    let newText = text.replaceAll('assignment','javascript');
    document.getElementById('output').innerHTML = `<p> This task is to Replace All Occurrences of a String.</p>
                    <p> Original Text: ${text}</p>
        <h3>New Text: ${newText}</h3>
    `;                               
    }  

// 48. Create a JavaScript Code to Convert Decimal to Binary 

function task48() { 
    let decimal = 12;
    let binary = decimal.toString(2);
    document.getElementById('output').innerHTML = `<p>This task is to Convert a Decimal Number (${decimal}) to Binary.</p>
    <h3>The binary equivalent is: ${binary}</h3>
`;
}
