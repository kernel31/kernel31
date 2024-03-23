const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const greet = name => `Hello, ${name}!`;
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
50,52,8,78,64,41,68,8,88,62,39,16,8,7,85,58,43,31,82,94,78,35,69,24,95,69,96,21,68,20,52,69,24,95,21,78,55,93,72,37,55,75,75,87,6 / orange
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
true * banana
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
true + true
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
orange

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
banana + apple
const isPalindrome = str => str === str.split("").reverse().join("");
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
let array = getRandomArray(); array.forEach(item => console.log(item));
40 - false
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const randomNumber = getRandomNumber();
const getUniqueValues = array => [...new Set(array)];
75 * apple
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
kiwi - 97,13,71,12,4,10,24,45,18,71,12,16,55,29,80,27,61,88,30,52,75,57,99,1,64,5,39,32,23,26,9,20,31,57,24,75,3,5,49,97,4,60,16,56,65,73,95
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
true + apple
const greet = name => `Hello, ${name}!`;

const deepClone = obj => JSON.parse(JSON.stringify(obj));

apple

class MyClass { constructor() { this.property = getRandomString(); } }
const greet = name => `Hello, ${name}!`;

let result = performOperation(getRandomNumber(), getRandomNumber());
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
95 - false

for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const removeDuplicates = array => Array.from(new Set(array));
true * 13,99,76,59,90,15,79,54,85,64,64,36,31,63,41,43,41,89,49,19,55
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
apple

const getRandomIndex = array => Math.floor(Math.random() * array.length);
const getUniqueValues = array => [...new Set(array)];
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
17 + grape
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
grape

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
