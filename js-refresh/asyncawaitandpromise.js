'use strict';


const myPromise = new Promise((resolve, reject) => {
    let exception = false;
    if (exception != true) {
        setTimeout(() => {
            console.log('hello');
        }, 2000)
        resolve('executed');
    }
    else {
        reject('failure');
    }
});

myPromise.then((msg) => { console.log(msg); return; }).then(function (msg) { console.log(msg) }).catch(function (msg) { console.log(msg) });