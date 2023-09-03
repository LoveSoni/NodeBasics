const user = {
    name: 'love',
    email: 'love.love@gmail.com',

    read: function () {
        console.log('hey you are reading now', this.name, this.email)
    }
}
console.log(user);
console.log(user.read());