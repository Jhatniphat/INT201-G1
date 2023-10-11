const numbers = [1, 2, 3, 4, 5];
const moreThan3 = numbers.find(number => number > 3);
const moreThan5 = numbers.find(number => number > 5);
console.log(moreThan3); // Output: 4
console.log(moreThan5);
console.log('------')
const indexMoreThan3 = numbers.findIndex(number => number > 3);
const indexMoreThan5 = numbers.findIndex(number => number > 5);
console.log(indexMoreThan3)
console.log(indexMoreThan5)

console.log('-------------')
const fruits = [
    {name : 'apple' , quantity : 2},
    {name : 'pineapple' , quantity : 3},
    {name : 'banana' , quantity : 0}
]
console.log(fruits.find(fruit => fruit.name === 'pineapple'))
console.log(fruits.find( ({ name }) => name === 'pineapple'))
console.log(fruits.findIndex(fruit => fruit.name === 'pineapple'))


function isPrime(element) {
    let i = 2;
    while (i <= Math.sqrt(element)) {
      if (element % i++ < 1) {
        return false;
      }
    }
    return element > 1;
  }
  
console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
console.log([4, 5, 7, 12].find(isPrime)); // 5
console.log([7, 5, 4, 12].find(isPrime)); // 7
console.log([1, 5, 4, 12].find(isPrime)); // 5