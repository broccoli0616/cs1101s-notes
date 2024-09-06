
bnh























































































































































































































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





















































