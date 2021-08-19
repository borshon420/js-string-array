function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return 'Please enter a string array';
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}

const friends = ['kutub', 'lion', 'shamol', 'sabbir'];
// const myBigBuddy = megaFriend();
// console.log(myBigBuddy);

// if(friends.indexOf('lion') != -1){
//     console.log('lion exist')
// }

if(friends.includes('lion')){
    console.log('lion exist')
}

// concat
const first = [1, 2, 3, 4, 5];
const second = [6, 7, 8];
const combained = first.concat(second);
console.log(combained);