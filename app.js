// array sonlar bor shu sonlarni kattasini topish

// let numbers = [10, 100, 100, 2000, 20]

// let maxNumber = []

// for (let i = 1; i < numbers.length; i++){
//     if(numbers[i] > maxNumber){
//         maxNumber = numbers[i]
//     }
// }

// console.log(maxNumber);

// array sonlar bor shu sonlarni kichigini topish

// const num1 = [10, 25, 102, 30]

// const nummax2 = Math.min(...num1)

// console.log(nummax2);

// array sonlar bor shu sonlarni tubini topish

// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// function findPrimes(arr) {
//     return arr.filter(isPrime);
// }

// const numbers = [2, 3, 4, 5, 80, 6, 7, 8, 9, 10, 11];
// const primes = findPrimes(numbers);

// console.log("Tub sonlar:", primes);

// arrey ichida objectlar bor id bo'yicha topish

// let arr = [
//   {
//     name: "Abdulaziz",
//     age: 22,
//     hobby: "footbal",
//     id: 707,
//   },
//   {
//     name: "Akromiy",
//     age: 24,
//     hobby: "footbal",
//     id: 505,
//   },
//   {
//     name: "Abdurauf",
//     age: 22,
//     hobby: "Game",
//     id: 101,
//   },
// ];

// let count = 707

// const result = arr.find((item) => {
//     if(item.id == count){
//         return true
//     }
// })

// console.log(result);

// arrey ichida objectlar bor oylik yeg'indisini chiqarish

let arr = [
  {
    name: "Abdulaziz",
    age: 22,
    hobby: "footbal",
    id: 707,
    salary: 5000,
  },
  {
    name: "Akromiy",
    age: 24,
    hobby: "footbal",
    id: 505,
    salary: 1000,
  },
  {
    name: "Abdurauf",
    age: 22,
    hobby: "Game",
    id: 101,
    salary: 7000,
  },
];

let count = 0;

for (let i = 0; i < arr.length; i++) {
  count += arr[i].salary;
}

console.log("Jami oyliklar yig'indisi", count);
