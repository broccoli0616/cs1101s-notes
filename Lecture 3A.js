/*name can refer to intermediate values
declare the name within the function as the intermediate value

function square(x){
    return x * x;
}
function f (x , y ) {
    const a = 1 + x * y ;
    const b = 1 - y ;
return x * square ( a ) + y * b + a * b ;
}
f (2 , 3); */

/*more fun with some recursion 
function fractal_1 ( rune , n ) {
return n === 1
? rune
: beside ( rune ,
stack ( fractal_1 ( rune , n - 1) ,
fractal_1 ( rune , n - 1)));
}
this is known tree recursion, there is whole chunk repeatation 

function fractal_2 ( rune , n ) {
return n === 1
const smaller_frac = fractal_2 ( rune , n - 1);
// 1. we cannot declare a name in a conditional statement, 
//but cannot just put it on the top or it will call itself again and again 
// cannot put in between conditional expression as well 
? rune
: beside ( rune ,
stack ( smaller_frac , smaller_frac ));
}

*/

/*conditional expression 
predicate ? consequent : alternate 
conditional statement 

if (predicate){
    consequent block
}
else{
    alternate block
}
1. remember to return within eahc block 
The recursive call of fractal will be 
completed, before the stack and beside get evaluated.*/
/*import {beside, heart, stack, show} from "rune";
function fractal_3 ( rune , n ) {
if ( n === 1) {
return rune ;
} else {
const f = fractal_3 ( rune , n - 1);
return beside ( rune , stack (f , f ));
}
}

show(fractal_3(heart, 3));*/


 /* rick the rabit 
    basically if you work through this solution,
    you'll realise that at the end of every possible way up to the stairs
    (i.e. hop, then skip) it returns 1. 
    So essentially what is happening is that we are adding
    1 for each of the possible ways to reach a certain step.
 */
/* function rick_the_rabbit ( n ) {
return n < 0
? 0
: n === 0
? 1
: rick_the_rabbit ( n - 1) // Rick hops
+
rick_the_rabbit ( n - 2) // Rick skips
+
rick_the_rabbit ( n - 3); // Rick jumps
} */

function first_denomination ( kinds_of_coins ) {
return kinds_of_coins === 1 ? 5 :
kinds_of_coins === 2 ? 10 :
kinds_of_coins === 3 ? 20 :
kinds_of_coins === 4 ? 50 :
kinds_of_coins === 5 ? 100 : 0;

function cc ( amount , kinds_of_coins ) {
return amount === 0
? 1
: amount < 0 || kinds_of_coins === 0
? 0
: cc ( amount -
first_denomination ( kinds_of_coins ) ,
kinds_of_coins )
+
cc ( amount , kinds_of_coins - 1);

/*higher order function, call a function within the function 










