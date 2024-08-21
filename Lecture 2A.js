/*1.3.1 substitution model 
evaluate operation 
evaluate const 
1.5.1 example for substitution model */

const cost_per_meter = 199.5; 
function circumference(radius){
    return 2 * math_PI * radius;
}
function cost_of_circular_handrail(radius){
    return cost_per_meter * circumference(radius);
    
}
cost_of_circular_handrail(2.1);

/*line 13 is the function application, the above is 
function declaration*/

/*applicative order reduction
evaluate the argument first and apply function from top to down
normal order reduction: do not evaluate the argument until nor more function 
can be applied*/

function sq ( x ) {
    return x * x ;
 }
function sum_of_sqs (x , y ) {
    return sq ( x )+ sq ( y );
}
function f ( a ) {
    return sum_of_sqs ( a +1 , a *2); 
}
f(3);

/* always start from the first line of the programme 
and then evalutate the statement(4)*/


/*1.2.1 and 1.2.2 recursion and iteration 

1.stackn and repeat_pattern */
import {show, stack, heart, stack_frac, sail} from "rune";

stack_frac (1 / 4 , heart ,stack_frac (1 / 3 , heart ,
stack_frac (1 / 2 , heart , heart)));

//declare a recusive function, stackn calls itself

function stackn (n , rune ) {
return n === 1
? rune
: stack_frac (1 / n ,
rune ,
stackn ( n - 1 , rune ));
}
show(stackn(7, heart));
/* before that must check if n = 1, if n =1 it will only return 
itself*/

/* repeat_pattern 
square twice  return square(square(2)
square 3 times: 
square(square twice)*/
function repeat_pattern(n, pat, init){
    return n === 0 ? init :pat(repeat_pattern(n - 1, pat, init));
}


/* deferred operation is do not evaluate agument first but apply the function more and more 
until no more to expand */

//factorial function 

function factorial(n){
   return n === 0 ? 1/* basement line */: n * factorial(n - 1); }
factorial(10); 

// write ilterative factorial 
function iter(product, counter, n){
     return counter > n ? product : iter(counter * product, 
     counter + 1, n);
} 

//iter(1, 1, 5); */

// fib Fibonacci sequence n= the nth number of the sequence

function fib(n){
    return n <= 1
           ? n
           : fib(n - 1) + fib(n - 2);
}

fib(11);




// recursive: the function operation approaches the base case, 
// while in iterative the controal variable approach the terminal value 
// there is deferred operation accumulate in recursive 









