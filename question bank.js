1. (mission 9)

function list_of_instrument_sound(list_arpeggio){
        return is_null(list_arpeggio)
               ? pair(silence_sound(0), null) // here must be null / list
               : pair(instrument(head(list_arpeggio), duration_each),
                 list_of_instrument_sound(tail(list_arpeggio)));
    } // lists of sounds 
    return consecutively(list_of_instrument_sound(list_arpeggio));
    
2.(mission 9)
 qn: 
function simplify_rhythm(rhythm) {
    function repeatition(rhythm, n){
        return n < 1
               ? null 
               : append(simplify_rhythm(rhythm), repeatition(rhythm, n - 1));
    }
    return is_list(rhythm)
           ? is_number(head(rhythm))
           ? rhythm 
           : accumulate((x, ys) => append(simplify_rhythm(x), ys), null, rhythm)
           : repeatition(head(rhythm), tail(rhythm));
}

why is_list first can run but is_pair cannot run  

3) 1231 tut 
function invest(n){
    let result = 0;
    for(let i = 0;i <= n; i = i + 1){
        for(let j = 0; j <= n - i; j = j + 1){
            for(let a = 0;a <= n - i - j ; a = a + 1){
                 for(let b = 0;b <= n - i - j -a ; b = b + 1){
                       let c = n - i - j - a - b;
                    if(c >= 0){
                     result = result + 1;
                     
                 }
                 }
                }
            }
        }
  return result;
}

invest(50);

