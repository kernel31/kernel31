const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
18,95,51,44,28,59,91,4,22,13,61,79,72,8,92,86,0,81,12,62,53,59,19,54,59,85,15,98,8 - false
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const isEven = num => num % 2 === 0;
false - apple
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
true / 55,4,43,79,61,7,52,14,7,15,70,90,6,19,11,40,39,94,88,15,99,68,10,1,84,70,64,3,83,70,17,69,28,42,90,85,23,29,40,77,46,71,35,19,33,0,3,69,29,22,61,60,30,14,64,45,41,19,77,5,47,29,93,39,76,94,56,63,79,12,89,18,66,90,12,21,25,82,58,8,34,4,94,58,22,54,61
const getUniqueValues = array => [...new Set(array)];
const deepClone = obj => JSON.parse(JSON.stringify(obj));

const getUniqueValues = array => [...new Set(array)];
94 / 20

const getRandomIndex = array => Math.floor(Math.random() * array.length);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
