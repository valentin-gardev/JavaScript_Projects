// Showing how objects work
// const person = {
//     name : 'Valio',
//     age:25,
//     grades: {
//         math : 5,
//         physics : 5,
//         language : 6,
//         physical : 4
//     },
//     averageGrade : gradeCalculation
// };

// function gradeCalculation(person){
//     calculatedGrade = Object.values(person.grades)
//     num = calculatedGrade.reduce((accumulator, currentValue) => {return accumulator + currentValue;}); 
//     return num / Object.values(person.grades).length
// }

// grade = gradeCalculation(person)
// console.log(grade)
// ---------------------------------------------------------------------------------------------------------------
// Prototype!:
// const developer = {
//     energy: 100,
//     work(consume) {
//         this.energy -= consume;
//     }
// };
// const cook = {
//     clean(sponge) {
//         this.energy -= sponge;
//     }
// };

// Object.setPrototypeOf(cook, developer);

// cook.work(10)
// cook.clean(30)
// console.log(cook)
// ---------------------------------------------------------------------------------------------------------------
// Assign()

// const target = {b: 4, c : 7};
// const source = {b: 7, a: 8};

// let me = Object.assign(target, source);

// console.log(me)
// ---------------------------------------------------------------------------------------------------------------
// Object.create