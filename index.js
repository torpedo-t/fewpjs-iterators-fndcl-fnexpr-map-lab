// write a function that iterates through an array, titleCasing each element
// define a variable 
const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newTuto = tutorials.map(capitalize)
  return newTuto
}

function capitalize(sentence) {
  return sentence.split(' ').map(w => w.charAt(0).toUpperCase() + w.substring(1)).join(' ');
}