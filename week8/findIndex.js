const numbers = [1, 2, 3, 4, 5];
const moreThan3 = numbers.findIndex(number => number > 3);
const moreThan5 = numbers.findIndex(number => number > 5);
console.log(moreThan3); // Output: 4
console.log(moreThan5);
console.log('-------------')

const fruits = [
    {name : 'apple' , quantity : 2},
    {name : 'pineapple' , quantity : 3},
    {name : 'banana' , quantity : 0}
]
console.log(fruits.findIndex(fruit => fruit.name === 'pineapple'))
console.log(fruits.findIndex( ({ name }) => name === 'pineapple'))


function isPrime(element) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }
  
console.log([4, 6, 8, 12].findIndex(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].findIndex(isPrime)); // 5
console.log([4, 5, 7, 12].findIndex(isPrime)); // 5