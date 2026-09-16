
// Callback hell/pyramid of doom

/*
Preparation of coffee:

1. Turn on the gas stove - 2 secs
2. Boil milk - 5 secs
3. Add sugar - 3 secs
4. Add coffee powder - 3 secs
5. Turn off the gas stove - 2 secs
*/

function turnOn(callback) {
    setTimeout(() => {
        console.log('Turn on the gas stove');
        callback();
    }, 2000);
}

function boilMilk(callback) {
    setTimeout(() => {
        console.log('Boil milk ');
        callback();
    }, 5000);
}

function addSugar(callback) {
    setTimeout(() => {
        console.log('Add Sugar');
        callback();
    }, 3000);
}

function addCoffeePowder(callback) {
    setTimeout(() => {
        console.log('Add coffee powder');
        callback();
    }, 3000);
}

function turnOff(callback) {
    setTimeout(() => {
        console.log('Turn off the gas stove');
        callback();
    }, 2000);
}


// callback hell/pyramid of doom - ugliest code
turnOn(() => {
    boilMilk(() => {
        addSugar(() => {
            addCoffeePowder(() => {
                turnOff(() => {
                    console.log('Coffee is ready...');
                })
            })
        })
    })
})