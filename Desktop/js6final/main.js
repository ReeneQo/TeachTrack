const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.push(11)
numbers.splice(0, 0, 0)
console.log(numbers)
const lastNumber = numbers.splice(-1, 1)
const firstNumber = numbers.splice(0, 1)
console.log(firstNumber)
console.log(lastNumber)


const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
const allNumbers = oddNumbers.concat(evenNumbers)
const razdel = allNumbers.sort((a, b) => {
    return a - b
})
console.log(razdel.join('-'))


const numbers0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
const squaredNumbers = numbers0.map((num) => {
    return num*2
})
const largeNumber = squaredNumbers.filter((number) => {
    return number >= 50
})
console.log(largeNumber)

const users = [
    {
        'name':'Григорий',
        'id':'1',
        'age':'16'
    },
    {
        'name':'Михаил',
        'id':'2',
        'age':'19'
    },
    {
        'name':'Саша',
        'id':'3',
        'age':'17'
    },
    {
        'name':'Алиса',
        'id':'4',
        'age':'18'
    }
]

const user = users.find((users) => {
    return users.id === '3'
})

// let alice = users.find((users) => {
//     return users.name === 'Алиса'
// })

let alice = users.find(alice => alice.name === 'Алиса')
console.log(user)
console.log(alice.name)

let sumNumbers = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sumNumbers)

const fruits = ['Ананас', 'Банан', 'Персик', 'Хурма', 'Слива', 'Банан', 'Хурма', 'Банан']
let kolvoFruits = fruits.reduce((accumulator, fruit) => {
    accumulator[fruit] = (accumulator[fruit] || 0) + 1
    return accumulator
}, {})

console.log(kolvoFruits)

const unsortedNumbers = [12, 1, 5, 6, 84, 214, 82, 5, 7, 9]
const sortedNumbers = unsortedNumbers.sort((a, b) => {return a-b})

console.log(sortedNumbers)