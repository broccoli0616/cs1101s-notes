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


