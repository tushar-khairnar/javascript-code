const name = "Tushar"
const repoCount = 50


// console.log(name + repoCount + " Value"); 


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   //`..... ${} ....`



const gameName = new String("tushar-tk-com")
console.log(gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 10)
// console.log(anotherString);

const newStringOne = "   tushar    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://tushar.com/tushar%20khairnar"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));