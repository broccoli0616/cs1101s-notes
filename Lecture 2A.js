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

//applicative order reduction
evaluate the argument first and 