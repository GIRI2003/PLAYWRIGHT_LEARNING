/*
promise - I promise you that a particular work is fulfilled or not fulfilled due to any reason
1. Pending state
2. Resolved -- fulfilled -- may/may not return the resource
3. Rejected -- reason (error reason)
*/

// promise -> click(element) -> resolved(no data) || if failed to click(element) -> rejected(reason- not visible, not clickable...)

// create a promise
let userPromise = new Promise((resolve, reject) => {
    console.log('Connecting to database...');
    let flag = true;
    if (flag) {
        resolve('user data fetcehd successfully...');
    } else {
        reject('Failed to fetch user data...');
    }
})

/*
promise - resolved - then()
promise - rejected - catch()
finally() - no matter if resolved or rejected finally() will exectue
*/
userPromise.then((result) => {
    console.log(result);
}).catch((result) => {
    console.log(result);
}).finally(() => {
    console.log('Database closed...');
});


// Promise with setTimeOut

function getUserInfo(userID) {
    return new Promise((resolve, reject) => {
        // let userID = 100;
        console.log('Fetching user details from database for', userID);
        setTimeout(() => {
            if (userID <= 0) {
                reject('404 Not Found...')
            } else {
                let user = {
                    id: userID,
                    name: 'Girinath',
                    mail: 'girinath@gmail.com'
                };
                resolve(user);
            }
        }, 3000)
    })
};

getUserInfo(121).then((obj) => {
    console.log(obj.mail);
}).catch((result) => {
    console.log(result);
}).finally(() => {
    console.log('Database closing...');
});


//if you want only resolve, you can write without new keyword..

function getNumber() {
    return Promise.resolve(200); // Here new keyword is not neccessary.. because we have only resolve
};

getNumber().then((result) => {
    console.log(result);
});


function getResolved() {
    return new Promise((resolve) => {
        resolve('success')
    })
};
getResolved().then((result) => {
    console.log(result);
});


function getReject() {
    return new Promise((resolve, reject) => {
        reject('Failed..')
    });
};
getReject().catch((result1) => {
    console.log(result1);
})