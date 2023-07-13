

/*
First solution, using forEach to loop through the array
*/
const numbers = [32, 4, 5, 6, 7, 10]
let sum = 0

numbers.forEach((number) => {
 sum += number
})

console.log(sum) // logs 64


/*
Second solution, using for to loop through the array
*/


const numbersSecond = [32, 4, 5, 6, 7, 10]

let sumSecond = 0

for (let i = 0; i < numbersSecond.length; i++) {
    sumSecond += numbersSecond[i]
}

console.log(sumSecond) // logs 64

/*
Third solution, using for to loop through the array
*/

const numbersThird = [32, 4, 5, 6, 7, 10]

let sumThird = 0

for (let number of numbersThird) {
    sumThird += number
}

console.log(sumThird) // logs 64

