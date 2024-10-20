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
        let b = -1;// b cannot declared outside the frame. 
        //otherwise it will always be 255, after one x loop, for the rest of y;
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

2) function my_first_filter(src, dest) {
    const width = image_width();
    const height = image_height();
    const x = 1/2 * width;
    const y = 1/2 * height;
    for (let j = 0; j < height; j = j + 1) {
        for (let i = 0; i < width; i = i + 1) {
            if(absolute(j - y) < 1/4 * height && 
               absolute(i - x) < 1/4 * width){
                   let a = j;
                   let b = i;
                   if(j < y){
                        a = j - 1/4 * height;
                   } else { a = j + 1/4 * height;}
                   if(i < x){
                        b = i - 1/4 * width;
                   } else { b = j + 1/4 * width;}
            dest[a][b][0] = src[j][i][0]; // invert red intensity
            dest[a][b][1] = src[j][i][1]; // invert green intensity
            dest[a][b][2] = src[j][i][2];// invert blue intensity
            dest[a][b][3] = 255;  // always 255
               }
          
        }
    }
}

install_filter(my_first_filter);

3) 
function compose(filter1, filter2) {
    const temp1 = make_image(WIDTH, HEIGHT);
    const temp2 = make_image(WIDTH, HEIGHT);
    const width = image_width();
    const height = image_height();
    return (src, dest) => {
        filter1(src, temp1);
        filter2(temp1, temp2); // why cannot just return temp2 ? 
        for (let i = 0; i < height; i = i + 1) {
        for (let j = 0; j < width; j = j + 1) {
            dest[i][j][0] = temp2[i][j][0];
            dest[i][j][1] = temp2[i][j][1];
            dest[i][j][2] = temp2[i][j][2];
            dest[i][j][3] = temp2[i][j][2];
        }
    }
        
    };
  


















