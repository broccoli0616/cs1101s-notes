// function n_of_streams() {
//      function helper(a, n){
//          return n === 0
//                 ? helper(a + 1, a + 1)
//                 : pair(a, () => helper(a, n -1));
//      }
//      return pair(1, () => helper(2, 2));
// }

// eval_stream(n_of_streams(), 10);


// function concentric_array(n) {
// let A = [];
//  for(let i = 0; i < 2* n - 1; i = i + 1){
//       A[i] = [];
//  }
//  let x = 2 * n - 2;
//  let cl = x / 2; 
//  let cu = x / 2; 
//  let a = 1; 
//  while(cl >= 0){
//      for(let i = 0; i < 2 * n - 1; i = i + 1){
//          A[cl][i] = a;
//          A[i][cl] = a;
//          A[cu][i] = a;
//          A[i][cu] = a;
//      }
//      cl = cl - 1;
//      cu = cu + 1;
//      a = a + 1;
//  }
 
//  return A;
// }

// concentric_array(2);











function memo(fun) {
let already_run = false;
let result = undefined;
return () => {
if (!already_run) {
result = fun();
already_run = true;
return result;
} else {
return result;
}
};
}
function add_streams(s1, s2) {
return pair(head(s1) + head(s2),
() => add_streams(stream_tail(s1),
stream_tail(s2)));
}
function partial_sums_1(s) {
return pair(head(s),
() => add_streams(stream_tail(s),
partial_sums_1(s)));
}
function partial_sums_2(s) {
return pair(head(s),
memo(() => add_streams(stream_tail(s),
partial_sums_2(s))));
}
const ones = pair(1, () => ones);
const integers_1 = partial_sums_1(ones);
const integers_2 = partial_sums_2(ones);

eval_stream(integers_2, 3);
