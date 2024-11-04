// function fizzbuzz(n){
//     function helper(a, n){
//         return a > n 
//               ? null 
//               : a % 3 === 0 && a % 5 !== 0
//               ? pair("Fizz", helper(a + 1, n))
//               : a % 5 === 0 && a % 3 !== 0
//               ? pair("Buzz", helper(a + 1, n))
//               : a % 5 === 0 && a % 3 === 0
//               ? pair("FizzBuzz", helper(a + 1, n))
//               : pair(a,helper(a + 1, n));
               
//     }
//     return helper(1, n);
// }

// fizzbuzz(15);

// function fizzbuzz(n, ls){
//     function helper(a, n, ls){
//         return a > n
//               ? null 
//               : pair(accumulate((x, y) => a % head(x) === 0
//                                          ? " tail(x)y " // how to display string ?
//                                          : "y" , null, ls), helper(a + 1, n, ls));
        
// }
// return helper(1, n, ls);
// }

// fizzbuzz(6, list(pair(1, "a"), pair(2, "ha")));



