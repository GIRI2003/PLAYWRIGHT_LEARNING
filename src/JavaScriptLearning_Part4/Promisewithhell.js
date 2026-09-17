
function startMachine() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('1. Machine started...');
            resolve();
        }, 4000);
    })
}

function boilWater() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('2. Water boiled...');
            resolve();
        }, 2000);
    })
}

function addCoffeePowder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('3. Coffee powder added...');
            resolve();
        }, 3000);
    })
}

function pourInCup() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('4. Pour in the cup...');
            resolve();
        }, 4000);
    })
}

function serveCoffee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('5. Coffee served...');
            resolve();
        }, 2000);
    })
}

startMachine()
    .then(() => boilWater())
    .then(() => addCoffeePowder())
    .then(() => pourInCup())
    .then(() => serveCoffee())
    .then(() => console.log('Coffee is ready.. enjoy it...'))
    .finally(() => console.log('Shut down the machine...'))