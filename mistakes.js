function d_map(fun, xs) {
    if (!is_null(xs)) {
        const h = head(xs);
        set_head(xs, fun(h));
        d_map(fun, tail(xs));
    }
}
const L = list(5);
d_map(x => y => x + y, L);

//1) scoping
let a = -1; 
    for (let y = 0; y < height; y = y + 1) {
        if(a < 255){
            a = a + 1;
        } 
        let b = -1;// b cannot declared outside the frame. otherwise it will always be 
        for (let x = 0; x < width; x = x + 1) {
          if(b < 255){
              b = b + 1;
          }
            dest[y][x][0] =  a; // invert red intensity
            dest[y][x][1] =  b; // invert green intensity
            dest[y][x][2] =  255 - a - b;// invert blue intensity
            dest[y][x][3] = 255;  // always 255
          
        }
    }
}
