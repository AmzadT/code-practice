/*
================================
  A. Data Structures & Algorithms (DSA)
================================
*/

// 1. GCD of Two Numbers using Euclidean Algorithm
function gcd(a, b) {
    if (b === 0) return Math.abs(a);
    return gcd(b, a % b);
}
console.log(gcd(56, 98)); // 14

// 2. Reverse an Array Without Built-in Functions
function reverseArray(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

// 3. Find Maximum Element in an Array
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([3, 7, 1, 9, 4])); // 9

/*
================================
  B. Coding Problems
================================
*/

// 1. Dynamic Form Submission (HTML + JavaScript)
const form = document.createElement('form');
const input = document.createElement('input');
input.type = 'text';
const submit = document.createElement('button');
submit.textContent = 'Add';
form.appendChild(input);
form.appendChild(submit);
document.body.appendChild(form);

const table = document.createElement('table');
document.body.appendChild(table);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const row = table.insertRow();
    row.insertCell(0).textContent = input.value;
    input.value = '';
});

// 2. Toggle Button Implementation
const button = document.createElement('button');
button.textContent = 'OFF';
document.body.appendChild(button);
button.addEventListener('click', () => {
    button.textContent = button.textContent === 'ON' ? 'OFF' : 'ON';
});

/*
================================
  C. JavaScript Theory & MCQs
================================
*/

// 1. Closures Example
function outerFunction(x) {
    return function innerFunction(y) {
        return x + y;
    };
}
const addFive = outerFunction(5);
console.log(addFive(10)); // 15

// 2. Hoisting Explanation
console.log(a); // Undefined due to hoisting
var a = 10;

// 3. Higher-Order Function: Custom filter()
function customFilter(arr, callback) {
    let result = [];
    for (let item of arr) {
        if (callback(item)) {
            result.push(item);
        }
    }
    return result;
}
console.log(customFilter([1, 2, 3, 4], num => num % 2 === 0));

// 4. Promises Example
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded!"), 2000);
});
myPromise.then(data => console.log(data));

/*
================================
  D. React Concepts (MCQ + Code Example)
================================
*/

// Quiz Component in React (Basic Example)
import React, { useState } from "react";
function Quiz() {
    const [score, setScore] = useState(0);
    const questions = [
        { q: "What is 2+2?", options: ["3", "4", "5"], answer: "4" }
    ];
    return (
        <div>
            {questions.map((item, index) => (
                <div key={index}>
                    <p>{item.q}</p>
                    {item.options.map(opt => (
                        <button key={opt} onClick={() => setScore(prev => prev + (opt === item.answer ? 1 : 0))}>{opt}</button>
                    ))}
                </div>
            ))}
            <p>Score: {score}</p>
        </div>
    );
}
export default Quiz;

/*
================================
  E. Node.js API Design
================================
*/

const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Welcome to API'));
app.listen(3000, () => console.log('Server running on port 3000'));

/*
================================
  F. Git Commands
================================
*/

// Key Git Commands:
// git clone <repo_url>
// git commit -m "commit message"
// git push origin main
// git pull origin main
// git branch new-feature
// git checkout new-feature
// git merge new-feature
// git rebase main

/*
================================
  G. HTML & Semantic Tags
================================
*/

// Semantic Tags:
// <header> <nav> <article> <section> <footer> are important for SEO and accessibility.
