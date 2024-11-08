// // // The route_distance function for the preceding task has been
// // // pre-declared here for you to use in this task.
// // // Do not declare your own route_distance function.
// // /*
// // function route_distance(mat, route) {
// //     // Pre-declared
// // }
// // */

// // function shortest_paper_route(n, mat, start) {

//     // You can keep, modify or remove the permutations function.
//     function permutations(ys) {
//         return is_null(ys)
//             ? list(null)
//             : accumulate(append, null,
//                 map(x => map(p => pair(x, p),
//                              permutations(remove(x, ys))),
//                     ys));
//     }
//     function L(n){
//         function helper(n, a){
//              return a === n
//               ? null 
//               : pair(a, helper(n, a + 1));
//         }
//         return helper(n, 0);
//     }
//      const p = permutations(remove(start, L(n)));
//      const routine = map(x => append(pair(start, x), list(start)), p);
//      const distance = accumulate((x, y) => route_distance(mat, x) < y 
//                                  ? route_distance(mat, x)
//                                  : y, 10000, routine);
//     const initial = append(head(routine), head(routine)); // how to get easier one
//      const r1 = accumulate((x, y) => route_distance(mat, x) < route_distance(mat, y)
//                                  ? x
//                                  : y,initial, routine);
//      return pair(r1, distance);


// }


// function runlength_encode(L) {
//     function count(xs, n){
//         if(is_null(xs)){
//             return null;
//         }
//         let A = head(xs);
//         while ( !is_null(xs) && head(xs) === A){
//             display(xs);
//             n = n + 1;
//             xs = tail(xs);
//         }
//         display(xs);
//         return n === 1
//               ? pair(A, runlength_encode(xs))
//               : pair(pair(A, n), runlength_encode(xs));
//     }
//   return count(L,0);
// }


// // Feel free to use these functions:
// const get_x = (aar) => list_ref(aar, 0);
// const get_y = (aar) => list_ref(aar, 1);
// const get_width = (aar) => list_ref(aar, 2);
// const get_height = (aar) => list_ref(aar, 3);


// function smallest_bounding_AAR_area(rs) {
//     if(is_null(tail(rs))){
//         return get_width(head(rs)) * get_height(head(rs));
//     }else{
//     const aar1 = head(rs);
//     const aar2 = head(tail(rs));
//     const w1 = get_width(aar1);
//     const w2 = get_width(aar2);
//     const h1 = get_height(aar1);
//     const h2 = get_height(aar2);
//     function compare(w1, w2){
//         return w1 > w2 
//               ? w1 
//               : w2;
//     }
//     return compare(w1, w2) * compare(h1, h2);
//     }

// }

// // Feel free to use these functions:
// const get_x = (aar) => list_ref(aar, 0);
// const get_y = (aar) => list_ref(aar, 1);
// const get_width = (aar) => list_ref(aar, 2);
// const get_height = (aar) => list_ref(aar, 3);


// function optimized_smallest_bounding_AAR_area(rs) {
//       if(is_null(tail(rs))){
//         return get_width(head(rs)) * get_height(head(rs));
//     }else{
//     const aar1 = head(rs);
//     const aar2 = head(tail(rs));
//     const w1 = get_width(aar1);
//     const w2 = get_width(aar2);
//     const h1 = get_height(aar1);
//     const h2 = get_height(aar2);
//     function compare(w1, w2){
//         return w1 > w2 
//               ? w1 
//               : w2;
//     }
//     return compare(w1, h2) * compare(h1, w2);
//     }


// }

// // TASK 3B

// // You may write helper functions here.

// function take(L, mid) {
//     return mid === 0 
//           ? null 
//           : pair(head(L), take(tail(L), mid - 1));
// }

// function drop(L, mid) {
//     return mid === 0 
//           ? L 
//           : drop(tail(L), mid - 1);
// }

// function middle(len) {
//     if(len % 2 === 0) {
//         return len / 2;
//     } else {
//         return math_floor(len / 2);
//     }
// }

// function merge(xs, ys) {
//     if(is_null(xs)) {
//         return ys;
//     } else if (is_null(ys)) {
//         return xs;
//     } else {
//         return head(xs) < head(ys) 
//               ? pair(head(xs), merge(tail(xs), ys)) 
//               : pair(head(ys), merge(xs, tail(ys)));
//     }
// }

// function merge_sort(L) {
//     if(is_null(L) || is_null(tail(L))) {
//         return L;
//     } else {
//         const mid = middle(length(L));
//         return merge(merge_sort(take(L, mid)), 
//                      merge_sort(drop(L, mid)));
//     }
// }

// function take_entry(L) {
//     const len = length(L);
//     if(len % 2 === 0) {
//         return list_ref(L, len / 2);
//     } else {
//         return list_ref(L, math_floor(len / 2));
//     }
// }

 
// function make_balanced_BST(L) {
//     const SL = merge_sort(L);
//     const mid = middle(length(SL));
//     if(is_null(SL)) {
//         return SL;
//     } else if(is_null(tail(SL))) {
//         return list(head(SL), null, null);
//     } else {
//         return list(take_entry(SL), 
//                     make_balanced_BST(take(SL, mid)), 
//                     make_balanced_BST(drop(SL, mid + 1)));
//     }
// }
// make_balanced_BST( list(4, 6, 1, 3, 7, 5) );
// // returns list(5, list(3, list(1, null, null), list(4, null, null)),
// //                 list(7, list(6, null, null), null))

// const tree = list(5, list(3, list(1, null, null), list(4, null, null)),
//               list(7, list(6, null, null), null));

// function flatten_tree(xs){
//     return accumulate((x, y) => append(is_list(x)
//                                       ? flatten_tree(x)
//                                       : list(x), y), null, xs);
// }

// flatten_tree(tree);

// function zip(xss, f){
//     const x = length(head(xss));
//     return map(x => map(y => f(list_ref(y, x)), xss), enum_list(0, x - 1));
// }

// zip(list(list(1, 2, 3), list(4, 5, 6), list(6, 7, 9)), x => x + 1);



// function tree_to_array(xs){
//     const A = [];
//     for(let i = 0; i < length(xs); i = i + 1){
//         A[i] = is_list(list_ref(xs, i))
//               ? tree_to_array(list_ref(xs, i))
//               : list_ref(xs, i);
//     } return A;
// }

// tree_to_array(list(list(1, 2, 3), list(2, 3, 5), list(4, 5)));

// function array_to_tree(A){
//     let xs = null;
//     for(let i = 0; i < array_length(A); i = i + 1){
//         xs = pair(is_array(A[i])
//                   ? array_to_tree(A[i])
//                   :(A[i]), xs);
//     } return reverse(xs);
// }

// array_to_tree([[1, 2, 3], [2, 3, 5], [4, 5]]);




// // merge sort 
// function take(L, mid) {
//     return mid === 0 
//           ? null 
//           : pair(head(L), take(tail(L), mid - 1));
// }

// function drop(L, mid) {
//     return mid === 0 
//           ? L 
//           : drop(tail(L), mid - 1);
// }

// function middle(len) {
//     if(len % 2 === 0) {
//         return len / 2;
//     } else {
//         return math_floor(len / 2);
//     }
// }

// function merge(xs, ys) {
//     if(is_null(xs)) {
//         return ys;
//     } else if (is_null(ys)) {
//         return xs;
//     } else {
//         return head(xs) < head(ys) 
//               ? pair(head(xs), merge(tail(xs), ys)) 
//               : pair(head(ys), merge(xs, tail(ys)));
//     }
// }

// function merge_sort(L) {
//     if(is_null(L) || is_null(tail(L))) {
//         return L;
//     } else {
//         const mid = middle(length(L));
//         return merge(merge_sort(take(L, mid)), 
//                      merge_sort(drop(L, mid)));
//     }
// }

// // quick short 
// function partition(xs, p) {
//     function part(ys, lower, upper) {
//         if (is_null(ys)) {
//             return pair(lower, upper);
//         } else {
//             const y = head(ys);

//             if (y <= p) {
//                 return part(tail(ys), pair(y, lower), upper);
//             } else {
//                 return part(tail(ys), lower, pair(y, upper));
//             }
//         }
//     }

//     return part(xs, null, null);
// }

// function quicksort(xs) {
//     if (is_null(xs)) {
//         return null;
//     } else {
//         const xss = tail(xs);

//         if (is_null(xss)) {
//             return xs;
//         } else {
//             const x = head(xs);
//             const p = partition(xss, x);

//             return append(quicksort(head(p)),
//                           pair(x, quicksort(tail(p))));
//         }
//     }
// }

// // Test
// // const my_list = list(23, 12, 56, 92, -2, 0);
// // quicksort(my_list);

// // insertion sort 
// function insert(x, xs) {
//     return is_null(xs)
//           ? list(x)
//           : x <= head(xs)
//           ? pair(x, xs)
//           : pair(head(xs), insert(x, tail(xs)));
// }

// function insertion_sort(xs) {
//     return is_null(xs)
//           ? xs
//           : insert(head(xs), insertion_sort(tail(xs)));
// }

// //// selection sort 
// function selection_sort(xs) { 
//     if (is_null(xs)) { 
//         return xs; 
//     }else{const x = smallest(xs); 
//           return pair(x, selection_sort(remove(x, xs))); 
//     } 
// } 
// function smallest(xs) { 
// function sm(x, ys){ 
// return is_null(ys) 
//       ? x 
//       : x < head(ys)
//       ? sm(x, tail(ys)) 
//       : sm(head(ys), tail(ys));
// }  
//       return sm(head(xs), tail(xs)); 
    
// } 



// // array_merge_sort 
// function merge_sort(A){
//   function merge(A, s, m, e){
//       const tmp = [];
//       let left = s; let right = m + 1;
//       let index = 0;
//       while (left <= m && right <= e){
//              if(A[left] <= A[right]){
//                 tmp[index] = A[left];
//                 left = left + 1;
//              }else{
//                 tmp[index] = A[right];
//                 right = right + 1;
//              }
//                 index = index + 1;
//           }
//       while (left <= m) { 
//              tmp[index] = A[left];
//              index = index + 1;
//              left = left + 1;
//           }
//       while(right <= e){ 
//              tmp[index] = A[right];
//              index = index + 1;
//              right = right + 1;
//         }
//       for (let i = 0; i < array_length(tmp); i = i + 1) {
//       A[s + i] = tmp[i];
//       }
//     }
//     function iter_ms(A, s, e) {
//         if (s < e) { 
//           const m = math_floor((s + e) / 2);
//           iter_ms(A, s, m); 
//           iter_ms(A, m + 1, e);
//          merge(A, s, m, e); 
//     }
//  }
//  return iter_ms(A, 0, array_length(A) - 1);
// }
 
// //// bubble sort
// function bblSort(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < (arr.length - i - 1); j++) {
//                 var temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     console.log(arr);
// }
// // array_selection_sort
// function selection_sort(A) {
//  const len = array_length(A);
//  function swap(A, i, j) {
//  const tmp = A[i];
//  A[i] = A[j]; A[j] = tmp;
//  }
//  function find_min(i) {
//  let p = i;
//  for (let j = i; j < len; j = j + 1) {
//  if (A[j] < A[p]) { p = j; }
//  }
//  return p;
//  }
//  for (let i = 0; i < len; i = i + 1) {
//  const j = find_min(i);
//  swap(A, i, j);
//  }
// }

// // array_insertion_sort
// function insertion_sort(A) {
//  const len = array_length(A);
//  function swap(A, i, j) {
//  const tmp = A[i];
//  A[i] = A[j]; A[j] = tmp;
//  }
//  for (let i = 1; i < len; i = i + 1) {
//  let j = i - 1;
//  while (j >= 0 && A[j] > A[j + 1]) {
//  swap(A, j, j + 1);
//  j = j - 1;
//  }
//  }
// }


// function value_to_baseN(N, x) {

//     const DIGIT_SYMBOLS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
//                           "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
//                           "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
//                           "U", "V", "W", "X", "Y", "Z"];
//   function helper(N,x){
//     function digi(num){
//         return DIGIT_SYMBOLS[num];
//     }
    
//     const num = x % N;
//     if(N > x){
//         return list(digi(num));
//     }else {
//       return append(helper(N, math_floor(x / N)), list(digi(num)));
 
        
//     }

// }
// return pair(N, helper(N,x));
// }
// value_to_baseN(16, 584255);


// function insert(x, xs) {
//     return is_null(xs)
//           ? list(x)
//           : x <= head(xs)
//           ? pair(x, xs)
//           : pair(head(xs), insert(x, tail(xs)));
// }

// function insertion_sort(xs) {
//     return is_null(xs)
//           ? xs
//           : insert(head(xs), insertion_sort(tail(xs)));
// }


// function bin_tree_to_BST(T) {
//     const L = flatten_bin_tree(T);
//     let SL = insertion_sort(L);

//     function copy_btree(btree) {
//         if (is_null(btree)) {
//             return null;
//         } else {
//             const left = copy_btree(list_ref(btree, 1));
//             const entry = head(SL);
//             SL = tail(SL);
//             const right = copy_btree(list_ref(btree, 2));
//             return list(entry, left, right);
//         }
//     }
//     return copy_btree(T);
// }



// function num_unique(A) {
// let count = 0;
// let len = array_length(A);
// let appear = true;
//     if(A[0] === undefined){
//         return 0;
//     } else{
//         for(let i = 0; i < len; i = i + 1){
//             // if(appear){
//             //     count = count + 1;
//             // }
//             for(let j = i + 1; j < len; j = j + 1){
//                 if(A[i] === A[j]){
//                     count = count + 1; 
//                     break;
//                 }
//             }
//         }
//     }
//     return len - count;

// }



// function value_to_baseN(N, x) {

//     const DIGIT_SYMBOLS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
//                           "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
//                           "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
//                           "U", "V", "W", "X", "Y", "Z"];
//   function helper(N,x){
//     function digi(num){
//         return DIGIT_SYMBOLS[num];
//     }
    
//     const num = x % N;
//     if(N > x){
//         return list(digi(num));
//     }else {
//       return append(helper(N, math_floor(x / N)), list(digi(num)));
 
        
//     }

// }
// return pair(N, helper(N,x));
// }

function string_list(s){
    function helper(n, s){
        return char_at(s, n) === undefined
               ? null 
               :pair(char_at(s, n), helper(n + 1, s));
    }
    return helper(0, s);
}

string_list("idoknowhowtodo");
// studio/ reflection function 
// debug notes 
// predeclared 
// TA video 


