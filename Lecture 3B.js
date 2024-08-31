
 
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

import {make_point, draw_connected, 
draw_connected_full_view_proportional} from "curve";
function unit_circle(t) {
 return make_point(math_cos(2 * math_PI * t),
 math_sin(2 * math_PI * t));
}
function unit_line_at(y) {
 return t => make_point(t, y);
} 
const unit_line = unit_line_at(0);

draw_connected(200)(unit_circle);/* only draw the first quadram as t [0,1]
, 200 points 
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
 // use p to constract a new point on the spiral curve 
 //( t distance away ) from the original 
 // t unit away from the original 2 d space 
 // distance from the original will be scaled by t 
}
draw_connected_full_view_proportional(200)(spiral_one); 
// 200 random number of t

function spiral(rev) {
 return t => {
 const p = unit_circle((t * rev) % 1); 
 // only extract the frac part, as t * rev will larger than 1 
 // go around the unit circle at higher speed 
 return make_point(t * x_of(p), t * y_of(p));
 }; // t is parameter, the whole body is the function 
}
/* do not need to define value of t bacuase it is randomly generated, 
// the function spiral actually returns a curve function which many point 
will be returned*/


/* transform on curves*/
const rot_line =
rotate_around_origin(0, 0, math_PI / 6)(unit_line);
const shifted_rot_line =
translate(0, 0.25, 0)(rot_line);
draw_connected(200)(shifted_rot_line);

draw_connected_full_view_proportional(200)(spiral(4));

/* alternative: combine translation first and apply to one curve */
function compose(f, g) {
return x => f(g(x));
}
const shift_rot =
compose(translate(0, 0.25, 0),
rotate_around_origin(0, 0, math_PI / 6));
const shifted_rot_line = shift_rot(unit_line);
draw_connected(200)(shifted_rot_line);

/*connecting curve */
function connect_rigidly(curve1, curve2) {
return t => t < 1/2
? curve1(2 * t) // run through the curve in double speed 
: curve2(2 * t - 1); // parameter t apply to 2 curve the same time
// can draw two tgt at the same time 
}
const result_curve =
connect_rigidly(arc, translate(1, 0, 0)(arc));
draw_connected_full_view_proportional(200)
(result_curve);

/* coloured curve */
function colorful_spiral(rev) {
return t => {
const p = unit_circle((t * rev) % 1);
const R = math_max(0, 1 - 2 * t) * 255;
const G = (1 - math_abs(1 - 2 * t)) * 255;// define the value of the colour 
const B = math_max(0, 2 * t - 1) * 255;
return make_color_point(t * x_of(p), t * y_of(p),
R, G, B);
// passing the coordinate and the colour 
};
}
draw_connected_full_view_proportional(2000)
(colorful_spiral(33));
/* 3 d coloured curve + need to specify the z coordinate*/
function colorful_3D_spiral(rev) {
return t => {
const p = unit_circle((t * rev) % 1);
const R = math_max(0, 1 - 2 * t) * 255;
const G = (1 - math_abs(1 - 2 * t)) * 255;
const B = math_max(0, 2 * t - 1) * 255;
return make_3D_color_point(
t * x_of(p), t * y_of(p), 2 * t, R, G, B);
}; //need to specify the z coordinate
}
draw_3D_connected_full_view_proportional(2000)
(colorful_3D_spiral(33));


/* make sound in source 
represent the sound wave in the function of time */
const pitch_A_wave = 
 t => math_sin(2 * math_PI * 440 * t); 
 // t is the parameter of time, this is the value of air pressure 
const pitch_A = make_sound(pitch_A_wave, 1.5);
// use make sound to convert the value of ? to sound 
// convert sound wave representation, t = 1.5 ( has a duration of 1.5 second)
play(pitch_A);

/* can make more complex sound by adding more waves together*/
const C_maj_chord_wave =
t => 0.33 * math_sin(2 * math_PI * 261.63 * t) + // C4
0.33 * math_sin(2 * math_PI * 329.63 * t) + // E4
0.33 * math_sin(2 * math_PI * 392.00 * t); // G4
const C_maj_chord = make_sound(C_maj_chord_wave, 1.5);
play(C_maj_chord);

const doremi_wave =
t => t < 0.5
? math_sin(2 * math_PI * 261.63 * t) // C4
: t < 1.0
? math_sin(2 * math_PI * 293.66 * t) // D4
: math_sin(2 * math_PI * 329.63 * t); // E4
const doremi = make_sound(doremi_wave, 1.5);
play(doremi);
// 3 tones connected one after each other ? 






















// manuplulate the continuius soundwave 

