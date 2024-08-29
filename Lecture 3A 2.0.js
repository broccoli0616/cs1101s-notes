function rick_the_rabbit ( n ) {
return n < 0
? 0
: n === 0
? 1
: rick_the_rabbit ( n - 1) // Rick hops
/* rabbit chose 3 types of way, 
let say the rabbit first step chooses hop, remain 2 steps. this twp steps
have 3 ways again to choose 
f(2) -- > f(1)+ f(0)+f(-1) -- f(0) +f(-1)+f(-2)+ 1+ 0-- 1+ 1
+
rick_the_rabbit ( n - 2) // Rick skips
the rabbit choose skip, remain f(1) ( f(0) + f(-1) +f(-1)), 1 way
+
rick_the_rabbit ( n - 3); // Rick jumps
the rabbit choose jump, n-n=0, 1 way 
} */

rick_the_rabbit(3);

/*solve a question 
eg coin change 
1. read the question careful 
different types of coins: 5, 10, 20, 50, 100 
2. start with simple case, smaller question play with examples 
10 (5,5) (10)
20(5,5,5,5)(5,5,10)(10,10)(20)
3. wishful thinking / existing solution 
idea: highest coin is either 100 or not 100 
in the first case; smaller problem 
in the second case: smaller problem 
base case: amount = 0 
4. program with source */




function first_ denomination (kinds_of_coins) {
return kinds_of_coins === 1 ? 5 :
kinds_of_coins === 2 ? 10 :
kinds_of_coins === 3 ? 20 :
kinds_of_coins === 4 ? 50 :
kinds_of_coins === 5 ? 100 : 0;
}

// nested conditional expression 

function cc(amount , kinds_of_coins) {
return amount === 0
? 1 
: amount < 0 || kinds_of_coins = 0
? 0
/* base cases */
: cc(amount -
first_ denomination (kinds_of_coins) ,
kinds_of_coins)
+
cc (amount , kinds_of_coins - 1);
}

/*got two possiblity here, either we use that first coin( the 100 ), 
substract from the total amount,and recall the coin change function 
the other posibility is we do not use that coin, the amount is not changed 
just straight away remove the largest coin 
and when the function keep being recalled, 
the amount decrease and the kindsof coin also decrease, it is just 
either use the currenly highest denomination  or not */


/* higher order function 
- takes in function as argument or returns a function 
what 1101 does is generalize

function sum (a , b) {
return a > b ? 0
: ⟨compute value with a⟩
+
sum (⟨next value from a⟩, b);
} */

function sum (term, a, next, b) {
return a > b ? 0
: term (a)
+
sum (term, next(a), next, b); 
} 
// next and term are functions 

function identity (x) {
return x ;
}
function plus_one (x) {
return x + 1;
}
function sum_integers (a , b ) {
return sum ( identity , a , plus_one , b );
}

// alternatively, declare function name inside the block 

function sum_integers (a , b ) {
    function identity (x) {
        return x ;
    }
    function plus_one (x) {
        return x + 1;
    }
    return sum (identity, a, plus_one, b);
}


/*lamada expression 
(param1, param2) => body
 if it is single parameter, you don't need (), if it is multiple need the 
 paratesis 
 x => x * x * x; */
 
 
function sum (term, a, next, b) {
return a > b ? 0
: term (a)
+
sum (term, next(a), next, b); 
} 

function sum_skip_cubes(a,b){
    return sum(x => x * x * x, a, x => x + 2, b);
}

/* if the lambda expression is not an argument, need the 
constant declaration */
const add_one = x => x + 1;
add(4);
/* you don't even need to give a name, just */
(x => x + 1)(2); 


/*returning functions from functios */



function make_adder (x) {
    function add(y) {
        return x + y;
    }
    return add;
}
/* it will eventually return the function add, and we can give the function
a name called adder_four when x = 4
function make_adder actually return a function add, and assign 
the add a name adder_four and give the parameter (6) */
const adder_four = make_adder (4);
adder_four (6);


// simpler form 
function make_adder(x){
    return y => y + x;
}
const add_four = make_adder(4);
add_four(3)









