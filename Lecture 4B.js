/* refinition of list discipline 
- a list of a certain data type 
is null or a pair whose head is of that data type and  whose tail 
is a list of that data type */
const listA = pair(1, pair(2, null));
// list of number 
const listD = NULL // a list of any data type 

// computing the length of a list 
/* the length of the empty list is 0, and the length of a non-empty 
list is one more than the length */

function length(xs) {
 return is_null(xs)
 ? 0 
 : 1 + length(tail(xs));
}

function length_iter(xs) {
 function len(ys, counted_so_far) {
 return is_null(ys)
 ? counted_so_far
 : len(tail(ys), counted_so_far + 1);
 }
 return len(xs, 0);
}

//appending two lists 
function append2(xs, ys){
    return is_null(xs)
        ? is_nus
        : ys
        : pair(head(xs), append2(tail(xs), ys));
}


/*order of growth: how many function is called
order of growth = length of xs
recursive: the function pair will be deferred 
until the inner function return a value
length of xs = number of pair call 
time is no. of function call
space is the no. of deferred ops + new data structure 
(some ppl also used the word variables) created */


//reserve list 
function reverse2(lst){
    return is_null(lst)
        ? null 
        : append(reverse2(tail(lst)),
        list(head(lst))); // pair(head(lst), null)
}
        
/*call reverse n times but each time we call reserve we are calling 
append as well, so run time is n^2
although every recursive call to reverse2, 
we are operating on a smaller list. */

//list(head(lst)) = pair(head(lst), null)?

// shorter running time, iterative process
function reserve3(xs){
    function rev(original, reversed){
        return is_null(original)
        ? reserved 
        : rev(tail(original), pair(head(original), reserved));
    }
    return(xs, null);
}

/* abstraction map */
function map(f, xs){
    return is_null(xs)
    ? null 
    : pair(f(head(xs)), map(f, tail(xs)));
}

// use lambda expression 
function scale_list(xs, k){
    return map(x => k*x, xs);
    
}

// taking even numbers from a list 
function even_numbers(xs) {
 return is_null(xs)
 ? null
 : head(xs) % 2 === 0
 ? pair(head(xs), even_numbers(tail(xs)))
 : even_numbers(tail(xs));
}

/* filter, to use predicate to choose if you want to keep the value or not 
predicate can be also written as a value */
function filter(pred, xs) {
 return is_null(xs)
 ? null
 : pred(head(xs))
 ? pair(head(xs), filter(pred, tail(xs)))
 : filter(pred, tail(xs));
}

function even_numbers(xs) {
 return filter(x => x % 2 === 0, xs);
}

/* accumulate */
function accumulate(op, initial, xs) {
 return is_null(xs)
 ? initial
 : op(head(xs), 
 accumulate(op, initial, tail(xs)));
}










        
        
        
        
        
        
        
        
        
}













































































































































































































principle: make sure that head(p) always has the data,and 
tail(p)always has the remaining elements 
-how to represent the empty list 
-defination:
a list is either null or a pair whose tail is a list */

- retrieving data from a list 
list of functions in source 2


pair(x, y) — returns pair made of x and y
is_pair(p) — returns true iff p is a pair
null — represents an empty list
is_null(xs) — returns true iff xs is the empty list null
head(p) — returns the head (first component) of the pair p
tail(p) — returns the tail (second component) of the pair p
list(x1,...,xn) — returns a list whose first element is x1,
second element is x2, etc. and last element is xn
...

- just use list function 
const first_denominator = list(1, 2, 4)

4. box notation 
- pair (x, y) is printed as [x, y]
-empty tail is printed a null 
-list function will get the same box notation 

5.list notation 
- use display_list function 
like head is a list, tail is a number, not a real list 

6.box and pointer diagrams 
- draw_data

7.error reporting
head(xs) xs 

8. the length of the list 

convert recursive to iterative == add the additional parameter 
as counter and return this only at end 





















































