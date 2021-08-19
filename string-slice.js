const anthem = 'Amar shonar bangla ami tomai valobashi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(withoutA);

const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

// substr
const anotherPart = anthem.substr(11, 7);
// console.log(anotherPart);

// substring
const anotherAnotherPart = anthem.substring(11, 15);
// console.log(anotherAnotherPart)

// concat 
const first = 'Amader';
const second = 'City';
const full = first.concat(second).concat('abc').concat('Rj kibria');
// console.log(full);

// join
const words2 = ['alim', 'badhon', 'camaroon', 'david'];
// const fullWord = words2.join(' ')
const fullWord = words2.join(', ')
console.log(fullWord);