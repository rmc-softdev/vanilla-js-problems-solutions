

/*
First solution, using forEach to loop through the array
*/

const numbers = [5, 32, 21, 18, 75, 12]
let biggestNumber = Number.NEGATIVE_INFINITY

numbers.forEach((number) => {
   
    if (number > biggestNumber) {
        biggestNumber = number
    }

})

console.log(biggestNumber) // logs 64


/*
Second solution, using for to loop through the array
*/


// use the previous example to try this yourself

/*
Third solution, using for to loop through the array
*/


// use the previous example to try this
