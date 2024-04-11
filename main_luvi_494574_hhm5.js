kiwi

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
banana

const squareRoot = num => Math.sqrt(num);
true - banana
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
false / 70

const sum = (a, b) => a + b;

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
kiwi

let array = getRandomArray(); array.forEach(item => console.log(item));

let result = performOperation(getRandomNumber(), getRandomNumber());

const removeDuplicates = array => Array.from(new Set(array));
const sum = (a, b) => a + b;
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
apple


const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const getRandomSubset = (array, size) => array.slice(0, size);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const getRandomSubset = (array, size) => array.slice(0, size);
banana * false
const getRandomElement = array => array[getRandomIndex(array)];
apple + banana
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
85 - true
const fetchData = async url => { const response = await fetch(url); return response.json(); }
banana - true
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const isEven = num => num % 2 === 0;
const getRandomSubset = (array, size) => array.slice(0, size);
kiwi

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const deepClone = obj => JSON.parse(JSON.stringify(obj));

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
false * 94,87,72,4,93,25,7,23,72,10,72,51,3,19,56,49,26,13,9,81,53,32,20,66,59,97,44,95,43,63,27,17,97,15,78,35,59,22,5,29

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
false / 0
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
apple / true
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const getRandomElement = array => array[getRandomIndex(array)];
apple

const findLargestNumber = numbers => Math.max(...numbers);
true - 99
let result = performOperation(getRandomNumber(), getRandomNumber());
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
29,40,52,86,73,21,27,86,80,26,61,85,43,62,29,20,23,96,5,11,98,28,45,74,85,58,3,89,72,99,44,28,9,98,60,12,7,47,53,36,1,31,93,25,47,54,2,70,80,36,3,24,63,87,36,52,48,22,9,24,77,34,9,23,20,9,9,74,32,59,21,57,79,63,32,70,17,15,74,98,35,18,14,73,96,28,17,74,17,15,63,85,21 / 24,58,68,15,11,90,55,22,80,16,46,81,36,48,20,13,37,23,56,40,10,65,98,85,90,98,24
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

grape

const multiply = (a, b) => a * b;
const multiply = (a, b) => a * b;
const removeDuplicates = array => Array.from(new Set(array));
const multiply = (a, b) => a * b;
7 * true
const sum = (a, b) => a + b;
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const isEven = num => num % 2 === 0;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const multiply = (a, b) => a * b;
const formatDate = date => new Date(date).toLocaleDateString();
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

false / false

const removeDuplicates = array => Array.from(new Set(array));
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
false - 22,85,68,91,25,84,73,79,71,75,3,75,43,33,62,47,77,24,35,0,14,31,22,57,67,82,30,3,17,27,40,36,40,58,83,93,33,90,72,17,16

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
