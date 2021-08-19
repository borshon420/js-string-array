const numbers = [6, 4, 7, 1, 8, 3, 9, 2, 5];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

const friends = ['kabli', 'josim', 'rajjak', 'anwar', 'deepjol', 'badsha'];
// const sortedFriends = friends.sort();
// console.log(sortedFriends);

// const reverseFriend = friends.reverse();
// console.log(reverseFriend);

// const sortedReverseFriend = friends.sort().reverse();
// console.log(sortedReverseFriend);

// number sorting fun
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortBigNumber = bigNumbers.sort(function(a, b){
    return a - b;
});
console.log(sortBigNumber);