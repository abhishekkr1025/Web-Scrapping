// console.log("Hello World");
// for(let i = 1;i<=10;i++){
//     console.log(i);
// }

// let number = 455;
// let flag = true;
// for(let i = 2;i<23;i++){
//     if(number%i==0){
//         flag = false;
//         console.log(number+" is not prime");
//         break;
//     }

// }
// if(flag==true){
//     console.log(number+" is prime")
// } 

// for(let i  = 1;i<=20;i++){
//     console.log(i)
// }
// for(let i  = 1;i<=20;i++){
//     if(i%3==0){
//         console.log("Fizz")
//     } else if(i%5==0){
//         console.log("Buzz")
//     } else if(i%3==0&&i%5==0){
//         console.log("FizzBuzz")
//     } 
// }

// let lo = 2;
// let hi = 91;
// for(let i = lo;i<=hi;i++){
//     if(isPrime(i)){
//         console.log(i)
//     }

// }

// function isPrime(x) {
//     let flag = true
//     for(let i = 2;i*i<=x;i++){
//         if(x%i==0){
//             flag = false;
//             return flag;
//             break;
//         }
//     }
//     if(flag==true){
//         return true;
//     }
// }

// let n = 1077;
// // let temp = n;
// let nod = 0;
// while(n>0){
//     n = Math.floor(n/10);
//     nod++;

// }
// console.log(nod)

// for(let i = 1;i<=20;i++){

//     if(i%3==0){
//       console.log("Fizz");
//     } else if(i%5==0){
//       console.log("Buzz");
//     } else if(i%3==0&&i%5==0){
//       console.log("FizzBuzz");
//     } else {
//         console.log(i)
//     }
// }

// let n = 6;
// let m = 24;
// for(let i = n;i<=m;i++){
//     if(isPrime(i)==true){
//         console.log(i);
//     }
// }

// function isPrime(n){
//     let flag = true;
//     for(let i = 2;i*i<=n;i++){
//         if(n%i==0){
//             flag = false;
//         }
//     }

//     return flag;
// }

// let n = 344;
// let count = 0;
// while(n>0){
//     n = Math.floor(n/10);
//     count++;
// }
// console.log(count);

// let n = 42;
// function decToBinary(b,n){
//    let temp = 0;
//    let p =1;
//    while(n>0){
//     let dig = n%b;
//     n = Math.floor(n/b);
//     temp = temp+dig*p;
//     p = p*10;

//    }
//    return temp;

// }

// let k = decToBinary(2,124);
// console.log(k);

// let actor = {
//     name: "leo",
//     movies: ["revenant", "wolf of wall street"],
//     age : 48
// }
// let age = "movies"
// console.log(actor[age])

// let arr = [1,2,3,4,5];
// let narr = [];
// let i = 0;
// let j = arr.length-1;
// while(i<=j){
//   let li = i;
//   let ri = j;
//   let temp = arr[li];
//   arr[li] = arr[ri];
//   arr[ri] = temp;

//   i++;
//   j--;
// }

// narr = arr;
// console.log(narr)

// function findLongestWordLength(str) {
//     let longestWord = "";
//     let words = str.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         let indwords = words[i];
//         if (indwords.length > longestWord.length) {
//             longestWord = indwords;
//         }
//     }
//     return longestWord.length;
// }

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog and then again flyied at a tremendous height"));