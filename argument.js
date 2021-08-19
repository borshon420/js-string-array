function addNumbers(num1, num2){
    let result = 0;
    for(const num of arguments){
        result = result + num;
    }
    return result;
}

const sum = addNumbers(23, 13, 50, 100, 200);
// console.log(sum);

function getFullName(firstName, lastName){
    let fullName = '';
    for(const part of arguments){
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('Omuk', 'Shonket', 'bin','Hanif', 'Shonket', 'bin', 'tomuk','shonket', 'bin', 'komuk', 'shonket');
console.log(name);