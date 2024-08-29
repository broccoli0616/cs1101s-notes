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
either use the currenly highest denomination  or not 
























