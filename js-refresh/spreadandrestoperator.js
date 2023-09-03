'use strict';
const userList = ['sam', 'john'];
const newUserList = ['peter', 'mat'];

const completeUserList = [...userList, ...newUserList];
console.log(completeUserList);


const userObject = {
    name: 'love',
    email: "love.love@gmail.com"
}

const empObject = {
    empName: 'peter',
    email: 'peter.ing@gmail.com'
}
console.log(Object.getOwnPropertyDescriptors(userObject));

const combinedObject = [...Object.entries(userObject), ...Object.entries(empObject)];
console.log(combinedObject);

//spread operator
function toArray(...values) {
    return values;
}

console.log(toArray(1, 2, 3, 4));