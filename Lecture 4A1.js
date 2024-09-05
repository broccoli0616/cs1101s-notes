/* data abstraction 
1. types of values in source 
- number 
-boolean values 
-strings
-function 
- some others 
eg: fisrt-denomination function is the data structure 
- function construct the data structure 
- select component 

combine different value in structure, provide way to access them 


2.simplest data structure - pair 
- constructed in math using tuple(set has order
notation (0.5, 0.25)
-selected in math using a pattern */

const pair = (x, y) => f => f(x, y);
// pair is like a constructor to pair (x, y) together 
// store x, y and after that apply a function to select the 
// data 
//head is like selector
// return constructor(selector)

const head = p => p((x, y) => x);  // complete lambda expression
const tail = p => p((x, y) => y);  // complete lambda expression

head(pair(1, 2)) === 1; // should return true
tail(pair(1, 2)) === 2; // should return true 

const pair = (x, y) => f => f(x, y);
function head(p){
    function p1(x, y){
        return x;
    }
    return p(p1);
}
head(pair(1, 2));
// function p is like to access the data inside the function 


/* constructor: given invividual compounent and combine 
to return them together 
/*selector functions help retrieve information from data types (e.g pairs)selector functions
help retrieve information from data types (e.g pairs)


// case study: represent rat number using pair ,then selector
head and tail to select dem and num 


3. making lists with pair 
- list 

























































































































































































































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





















































