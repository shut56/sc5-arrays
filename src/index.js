const myList = [
  'Pepe', 
  'Paul', 
  'Dana', 
  null, 
  0, 
  [1,2,3], 
  { id: 'hello' }, 
  undefined, 
  true, 
  () => {},
  'Pepe'
]
const newList = [...myList, 'Masson']

console.log('myList', myList)

console.log('newList', newList)

console.log('LENGTH: ', myList.length)
console.log(myList[3])
console.log(myList[myList.length - 1])

const index = 0
console.log(myList[index])

// console.log(newList.length = 0)
const check = 'Pepe'

console.log(newList[index] === check)

/*
myList.map()
myList.filter()
myList.reduce()
myList.find()
myList.forEach()

myList.indexOf()
myList.concat()
myList.join()
myList.fill()
myList.slice()

myList.reverse()
myList.reduceRight()
myList.sort()
myList.includes()
myList.findIndex()
*/

console.log(myList.indexOf('Pepe'))
console.log(myList.findIndex(() => 'Pepe'))

const result = myList.map((element, index, array) => {
  return `${element}`
})

console.log(result)


const arrowFunc = (func, a, b, c) => {
  return func(a, b, c)
}

function createName(name, lastName, age) {
  return {
    'first name': name,
    'last Name': lastName,
    age: age
  }
}

function getArray() {
  return [...arguments]
}

const card = arrowFunc(createName, 'Pepe', 'Frog', 30)
console.log(card)

console.log('getArray: ', getArray)

const card2 = arrowFunc(getArray, 1, 2, 3)
console.log(card2)

const card3 = arrowFunc((i,j,k) => i + j + k, 1, 2, 3)
console.log('card3', card3)

const cb = (item, index) => item * index

// arrowFunc.map(cb)

const arrayWithDoublicates = [1,2,3,4,2]
// console.log([...new Set([...arrayWithDoublicates])])
// console.log('INDEX OF: ', 
//   arrayWithDoublicates.filter((item, index, array) => {
//     console.log(`
//     ${index + 1}
//     item: ${item}
//     index: ${index}
//     array: ${array}
//     array.indexOf(item): ${array.indexOf(item)}
//     array.indexOf(item) === index (${array.indexOf(item)} === ${index}): ${array.indexOf(item) === index}
//     `)
//     return array.indexOf(item) === index
//   })
// )

const a = 0
const b = 0
const c = true
const d = 8

const compare = 0 && 1  
console.log(compare)

function whatIsArguments() {
  return arguments
}

const arrowFunctionOfPepe = () => {
  return arguments
}

console.log(
  whatIsArguments(1, 'Pepe', [1,2,3], { hello: 'SkillCrucial' }),
  arrowFunctionOfPepe(1,2,3,4)
)

const listOfJalya = [1,2,3,4,5,6,3,5,7]

console.log(
  listOfJalya.map((item) => item * 10),
  listOfJalya.filter((item) => item % 3)
)

// console.log(
//   listOfJalya.reduce((acc,rec,index) => {
//     console.log(`Iter ${index + 1}: `, acc)
//     console.log(rec, 'Includes acc? ', acc.includes(rec))
//     if (acc.includes(rec)) {
//       return acc
//     }
//     return [...acc, rec]
//   },  [])
// )

const listOfDasha = [
  'Pepe', 
  'Dasha', 
  'Mike', 
  'Sasha', 
  'Jalya', 
  'Eugene', 
  'Danny', 
  'Stacy',
  'Pavel'
]
/*
[
  {
    id: 'pepe_1',
    name: 'Pepe'
  },
  {...}
]
*/
// console.log('Random: ', Math.floor(Math.abs(Math.random() * 100 - 40)))
const userListOfDasha = listOfDasha.map((name, index) => {
  return {
    id: `${name.toLowerCase()}_${index+1}`, 
    name,
    age: Math.floor(Math.abs(Math.random() * 100 - 40))
  }
})

// console.log('userListOfDasha: ', userListOfDasha)
/*
{
  pepe_1: {
    id: 'pepe_1',
    name: 'Pepe'
  },
  {...}
}
*/

const task1 = userListOfDasha.reduce((acc, rec) => {
  return {...acc, [rec.id]: rec}
}, {})

// console.log(
//   'Task 1: ', task1
// )

/*
{
  P: [
    {
      id: 'pepe_1',
      name: 'Pepe',
      age: numb
    }, 
    {
      id: 'pavel_n',
      name: 'Pavel',
      age: numb
    }
  ],
  D: [{...}]
}
*/

const task2 = userListOfDasha.reduce((acc, rec) => {
  console.log('THIS: ', acc)
  if (typeof acc[rec.name[0]] === 'undefined') {
    return {...acc, [rec.name[0]]: [rec]}
  }
  return {...acc, [rec.name[0]]: [...acc[rec.name[0]], rec]}
}, {})

console.log(
  'Task 2: ', task2
)


const userObj = {
  name: 'pepe',
  'date of birth': '01/01/2001',
  age: 40,
  list: [1,2,3]
}

const dynamicKey = 'age'
const dynoName = 'list'

console.log(userObj.name)
console.log(userObj['date of birth']) // A-Za-z0-9_
console.log(userObj[dynamicKey])
const someList = [...userObj[dynoName], 120]
console.log(someList)

