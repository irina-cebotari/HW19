// ex1

// const obj = {
//     nume: 'Irina',
//     age: 23,
//     hobby: 'overthinking',
//     city: 'Chisinau',
//     education: 'high'
// }


// const func = (obj) => {
// for (let item in obj) {
//     console.log(`Value: ${ obj[item]}`)
//     }
// }

// func(obj)



// ex2

// const obj1 = {
//     nume: 'Irina',
//     age: 23,
//     hobby: 'overthinking',
//     city: 'Chisinau',
// }

// const obj2 = {...obj1, hobby: 'overcontemplating', country: 'Moldova', education: 'high'}

// console.log(obj1, obj2)



// ex3

const numberArr = [1, 2, 3, 4, 5, 6, 7, 8];

// const addOne = numberArr.reduce((acc, curr) => {

//     return [...acc, curr + 1];
// }, []);

// console.log(addOne);


const func = (list) => {
    return list.reduce((acc, curr) => [...acc, curr + 1],[])
}

console.log(func(numberArr))