
 
 /* curves
 representation of curves - explicit 
 - (curve in 2D) the value of the dependent variable is given in terms of the 
 independent variable 
 y = f(x) while some curves cannot be expressed in explicit form 
 -(curve in D) require 2 equations y = f(x) z = f(x)
 
 implicit
 - (curve in 2D) f(x, y) = 0; ax+by+c = 0
 -(curve in 3D) can be represented as the intersection of two surfaces 
 f(x,y,z) = 0 
 g(x,y,z) = 0
 
 
 - parametric form 
 x, y, z is expressed as a function of parameter t 
 if pass in a range of value t, get a set of point - not infinite - curve 
 segment 
 tmin <= t <= tmax 
 often 0 <= t <= 1
 
 - curves in source 
 if c is a curves, its starting point: c(0), ending point is c(1)
 curve: a function that has number argument and return a point 
 
 make_point : (Number, Number) → Point (find the point) [constructing of 
 2d point ]
x_of, y_of : Point → Number - (find the x/y coordinate) */

import {make_point, draw_connected, draw_connected_full_
function unit_circle(t) {
 return make_point(math_cos(2 * math_PI * t),
 math_sin(2 * math_PI * t));
}
function unit_line_at(y) {
 return t => make_point(t, y);
} 
const unit_line = unit_line_at(0);

draw_connected(200)(unit_circle);/* only draw the first quadram, 200 points 
 on the unit_circle connected, it use the unit_circle function and use 200 t values 
 to draw 200 points and connect them into a circle. */
 

draw_connected_full_view_proportional(200)(unit_circle);
draw_connected_full_view_proportional(8)(unit_circle); 
// too litte point, will not be smooth 

/*both draw functions uses all t values. 
draw_connected - only displays the parts between 
(0,0) and (1,1) of the resulting Drawing are shown 
in the window. 
draw_connected_full_view_proprtional 
- displays the entire curve scaled proportionally 
to fit entirely inside the cube.*/

/*exmaple: spiral curves 
function of parameter t will only return a point, after that 
use draw_connected to connect the point tgt */

function spiral_one(t) {
 const p = unit_circle(t); // extract a point of unit_circle
 return make_point(t * x_of(p), t * y_of(p)); // scale it by t 
 //( t distance away ) from the original 
 // t unit away from the original 2 d space 
}
draw_connected_full_view_proportional(200)(spiral_one); 
// 200 random number of t

function spiral(rev) {
 return t => {
 const p = unit_circle((t * rev) % 1); 
 // only abstract the frac part, as t * rev will larger than 1 
 return make_point(t * x_of(p), t * y_of(p));
 }; // t is parameter, the whole body is the function 
}
draw_connected_full_view_proportional(200)(spiral(4));


/* make sound in source */
represent the sound wave in the function of time 
const pitch_A_wave = 
 t => math_sin(2 * math_PI * 440 * t); 
 // t is the parameter of time, 
const pitch_A = make_sound(pitch_A_wave, 1.5);
// convert sound wave representation, t = 1.5 ( has a duration of 1.5 second)
play(pitch_A);

// manuplulate the continuius soundwave 

