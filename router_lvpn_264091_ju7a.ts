const capitalizeString = str => str.toUpperCase();
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
apple

for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const reverseWords = str => str.split(" ").reverse().join(" ");
console.log(getRandomString());
grape


const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

const getRandomIndex = array => Math.floor(Math.random() * array.length);
const findLargestNumber = numbers => Math.max(...numbers);
banana

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
banana


const greet = name => `Hello, ${name}!`;
false / 80

const getUniqueCharacters = str => Array.from(new Set(str)).join("");

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
function addNumbers(a, b) { return a + b; }
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
apple


const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const formatDate = date => new Date(date).toLocaleDateString();

