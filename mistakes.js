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
// debug
2) function m_cc(amount, kinds_of_coins){
    function first_denomination(kinds_of_coins) {
          return kinds_of_coins === 1 ? 5 :
                 kinds_of_coins === 2 ? 10 :
                 kinds_of_coins === 3 ? 20 :
                 kinds_of_coins === 4 ? 50 :
                kinds_of_coins === 5 ? 100 : 0;
    let mem = [];
    let x = amount; 
    let y = kinds_of_coins;
    for(let i = x; i > 0; i = i - 1){
     mem[x] = [];
    for(let j = y; j > 0; j = j - 1){
    if(mem[x][y] !== undefined){
       return mem[x][y];
        }else{
              const result = x === 0
                             ? 1
                             : x < 0 || y === 0
                             ? 0
                             : m_cc(x, y - 1)
                             +
                              m_cc(x - first_denomination(y), y);
                   write(x, y, result);
               return result;
      }
        
    function write(x,y,value) {
    if (mem[x] === undefined) {
        mem[x] = [];
    }else { }
     mem[x][y] = value;
 }
}
}
}
}
m_cc(100, 5);

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
  


















