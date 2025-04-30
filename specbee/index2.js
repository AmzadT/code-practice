// # A. Data Structures & Algorithms (DSA)

// ## 1. GCD / JCD of Two Numbers
// ### Question: Write a function to compute the greatest common divisor (GCD/JCD) of two numbers using the Euclidean algorithm.
// #### Solution:
```javascript
function gcd(a, b) {
    if (b === 0) return Math.abs(a);
    return gcd(b, a % b);
}
console.log(gcd(48, 18)); // Output: 6
```
// ### Follow-up: How would you modify the algorithm for negative inputs?
// Modify it by taking the absolute values of `a` and `b` before performing calculations.

// ## 2. Array Manipulations
// ### Reverse an Array Without Built-in Functions
```javascript
function reverseArray(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
```

// ### Find Maximum Element
```javascript
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}
console.log(findMax([1, 3, 7, 2, 5])); // Output: 7
```

// # B. Coding Problems

// ## 1. Dynamic Form Submission
// ### Question: Create a dynamic table where each form submission adds a new row.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Dynamic Form Submission</title>
</head>
<body>
    <form id="myForm">
        <input type="text" id="name" placeholder="Enter Name" required>
        <button type="submit">Submit</button>
    </form>
    <table id="dataTable" border="1">
        <tr>
            <th>Name</th>
        </tr>
    </table>
    <script>
        document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault();
            let name = document.getElementById("name").value;
            let table = document.getElementById("dataTable");
            let row = table.insertRow();
            row.insertCell(0).textContent = name;
            document.getElementById("name").value = "";
        });
    </script>
</body>
</html>
```
// ### Best Practices for Updating the DOM Dynamically
// - Use `documentFragment` to reduce reflows.
// - Batch DOM updates.
// - Use event delegation.

// ## 2. Toggle Button Implementation
```html
<button id="toggleBtn">ON</button>
<script>
    document.getElementById("toggleBtn").addEventListener("click", function() {
        this.textContent = this.textContent === "ON" ? "OFF" : "ON";
    });
</script>
```
// ### Managing Button State in Vanilla JS vs React
// - **Vanilla JS:** Use event listeners and `textContent`.
// - **React:** Use `useState` for state management.

// # C. Multiple-Choice Questions (MCQs) & Conceptual Topics

// ## JavaScript Theory
// ### Closures
// A closure is a function that remembers its scope even after the outer function has executed.
```javascript
function outerFunction(x) {
    return function innerFunction(y) {
        return x + y;
    };
}
let addFive = outerFunction(5);
console.log(addFive(3)); // Output: 8
```

// ### Hoisting
// Hoisting moves variable and function declarations to the top before execution.
```javascript
console.log(x); // Undefined
var x = 5;
```

// ### Higher-Order Functions
// HOFs take other functions as arguments.
```javascript
function customFilter(arr, callback) {
    let result = [];
    for (let item of arr) {
        if (callback(item)) result.push(item);
    }
    return result;
}
console.log(customFilter([1, 2, 3, 4], num => num > 2));
```

// ### JavaScript Promise
// A Promise represents an asynchronous operation.
```javascript
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success"), 1000);
});
promise.then(console.log);
```

// # D. React Concepts
// ## Interactive Quiz Design
// A React component for a multiple-choice quiz:
```javascript
import React, { useState } from "react";

function Quiz() {
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState(null);
    const question = {
        text: "What is 2 + 2?",
        options: ["3", "4", "5"],
        correct: "4"
    };
    
    function handleSelect(option) {
        setSelected(option);
        if (option === question.correct) setScore(score + 1);
    }
    
    return (
        <div>
            <h3>{question.text}</h3>
            {question.options.map((opt) => (
                <button 
                    key={opt} 
                    onClick={() => handleSelect(opt)}
                    style={{ backgroundColor: selected && opt === question.correct ? "green" : selected === opt ? "red" : "" }}
                >
                    {opt}
                </button>
            ))}
            <p>Score: {score}</p>
        </div>
    );
}
export default Quiz;
```
// ### State Management Techniques
// - `useState` for component state.
// - `useContext` or Redux for global state.

// # E. Backend & API (Node.js & MongoDB)
// ## Node.js API Design
// - Use Express for route handling.
// - Implement authentication using JWT.
// - Construct queries using Mongoose.
```javascript
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({ name: String, email: String });
const User = mongoose.model("User", userSchema);

app.post("/users", async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
});

app.listen(3000);
```

// This update includes HTML, CSS, and additional best practices for debugging and performance optimization.
