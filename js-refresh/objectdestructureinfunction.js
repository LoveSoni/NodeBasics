'use strit';

// we've one user object with name, email, password
const user = {
    name: "love",
    email: 'love.love@gmail.com',
    password: 'test'
}
// and i want to create a function which process password only
// so rather than passing the user object directly in the functions argument 
// i can specify my function to consume only password

function processPassword({ password }) {
    console.log(password);
}
// although i'm passing user object but function will only work on pasword
// we can add semicloumn after password in line number 13 to have more number of arguments as a placeholder
processPassword(user);


// store email and password in a constants
const { email, password } = user;
console.log(email, password);



// arrays descturing
const heroes = ['spiderman', 'batman', 'harryporter'];
const [index1, index2] = heroes;
console.log(index1, index2)

// note for object desturing we use {} curly braces
// for array destruting we use [] square braces
