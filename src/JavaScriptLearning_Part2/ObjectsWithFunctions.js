

let user = {
    name: 'Girinath',
    age: 23,
    gender: 'Male',

    coding() {
        console.log(this.name, 'can code');
    },

    playing() {
        console.log(this.name, 'can play');
        this.coding();
    },

    addition(x, y) {
        return x + y;
    },

    data: function () {
        console.log('hello', this.name);
    },

    //Arrow function cannot have this.name
    info: () => {
        console.log('information', user.name);
    }
}

user.playing();

let result = user.addition(10, 20)
console.log(result);

user.data();
user.info();

/* ------------------------------------------ */


let loginPage = {
    userName: '#username',
    passWord: '#password',
    loginButton: '#button',
    logoutButton: '#logout',

    //Normal Function -> no let keyword
    doLogin() {
        console.log('Enter username using', this.userName);
        console.log('Enter password using', this.passWord);
        console.log('Click on login button');
    },

    // Arrow function -> no let keyword, colon : should be used, = is not allowed inside objects
    doLogout: () => {
        console.log('Logout using', loginPage.logoutButton);
    }
}

loginPage.doLogin(loginPage.userName, loginPage.passWord);
loginPage.doLogout();