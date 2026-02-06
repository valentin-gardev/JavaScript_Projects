const arr = [4, 5];

function solve(arr){
    let arrMin = [];
    arr.forEach(function(timeHour, index){
        const timeMin = timeHour * 60
        arrMin.splice(index, 0, timeMin)
    });
    console.log(arrMin)
};

solve(arr);