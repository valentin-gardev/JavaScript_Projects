let seconds = 0
function one(){
    return new Promise((resolve) => {
    setTimeout(() => {
        seconds += 2
        console.log(`Time passed: ${seconds}`)
        resolve()
    }, 2000)
    });
};
function two(){
    return new Promise((resolve) => {
        setTimeout(() => {
        seconds += 2
        console.log(`Time passed: ${seconds}`)
        resolve()
        }, 2000)
    });
}
function three(){
    return new Promise((resolve) => {
    setTimeout(() => {
        seconds += 2
        console.log(`Time passed: ${seconds}`)
        }, 2000);
    });
};
function four(){
    setTimeout(() => {
        seconds += 2
        console.log(`Time passed: ${seconds}`)
    }, 2000)
}
function five(){
    setTimeout(() => {
        seconds += 2
        console.log(`Time passed: ${seconds}`)
    }, 2000)
}


one()
    .then(two)
    .then(three)
