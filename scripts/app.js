const myfullName = 'Karanveer Singh Virdi';
const myStudentNumber = '1244140';

const result = (`${myfullName} - ${myStudentNumber}`);
//console.log(`${myfullName} - ${myStudentNumber}`);


console.log (result);

const primaryHeadingContent = document.querySelector('h1');


let element = document.querySelector('h1');

console.log(element.innerHTML);

element.innerHTML = result;

console.log(element.innerHTML);

let myElement = document.querySelector('h1');
console.log(myElement.classList);
myElement.classList.add("primaryHeading")
