const myFunction = () => {
    console.log('my function');
}

myFunction();

const userInfo = (name, email) => {
    return `name is ${name} and password is ${email}`;
}
console.log(userInfo('love', 'love.love@gmail.com'));

const add = (a, b) => a + b;
console.log(add(1, 2));