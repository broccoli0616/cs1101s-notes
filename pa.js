// The route_distance function for the preceding task has been
// pre-declared here for you to use in this task.
// Do not declare your own route_distance function.
/*
function route_distance(mat, route) {
    // Pre-declared
}
*/

function shortest_paper_route(n, mat, start) {

    // You can keep, modify or remove the permutations function.
    function permutations(ys) {
        return is_null(ys)
            ? list(null)
            : accumulate(append, null,
                map(x => map(p => pair(x, p),
                             permutations(remove(x, ys))),
                    ys));
    }
    function L(n){
        function helper(n, a){
             return a === n
               ? null 
               : pair(a, helper(n, a + 1));
        }
        return helper(n, 0);
    }
     const p = permutations(remove(start, L(n)));
     const routine = map(x => append(pair(start, x), list(start)), p);
     const distance = accumulate((x, y) => route_distance(mat, x) < y 
                                 ? route_distance(mat, x)
                                 : y, 10000, routine);
    const initial = append(head(routine), head(routine)); // how to get easier one
     const r1 = accumulate((x, y) => route_distance(mat, x) < route_distance(mat, y)
                                 ? x
                                 : y,initial, routine);
     return pair(r1, distance);


}


function runlength_encode(L) {
    function count(xs, n){
        if(is_null(xs)){
            return null;
        }
        let A = head(xs);
        while ( !is_null(xs) && head(xs) === A){
            display(xs);
            n = n + 1;
            xs = tail(xs);
        }
        display(xs);
        return n === 1
              ? pair(A, runlength_encode(xs))
              : pair(pair(A, n), runlength_encode(xs));
    }
  return count(L,0);
}


// Feel free to use these functions:
const get_x = (aar) => list_ref(aar, 0);
const get_y = (aar) => list_ref(aar, 1);
const get_width = (aar) => list_ref(aar, 2);
const get_height = (aar) => list_ref(aar, 3);


function smallest_bounding_AAR_area(rs) {
    if(is_null(tail(rs))){
        return get_width(head(rs)) * get_height(head(rs));
    }else{
    const aar1 = head(rs);
    const aar2 = head(tail(rs));
    const w1 = get_width(aar1);
    const w2 = get_width(aar2);
    const h1 = get_height(aar1);
    const h2 = get_height(aar2);
    function compare(w1, w2){
        return w1 > w2 
               ? w1 
               : w2;
    }
    return compare(w1, w2) * compare(h1, h2);
    }

}

// Feel free to use these functions:
const get_x = (aar) => list_ref(aar, 0);
const get_y = (aar) => list_ref(aar, 1);
const get_width = (aar) => list_ref(aar, 2);
const get_height = (aar) => list_ref(aar, 3);


function optimized_smallest_bounding_AAR_area(rs) {
      if(is_null(tail(rs))){
        return get_width(head(rs)) * get_height(head(rs));
    }else{
    const aar1 = head(rs);
    const aar2 = head(tail(rs));
    const w1 = get_width(aar1);
    const w2 = get_width(aar2);
    const h1 = get_height(aar1);
    const h2 = get_height(aar2);
    function compare(w1, w2){
        return w1 > w2 
               ? w1 
               : w2;
    }
    return compare(w1, h2) * compare(h1, w2);
    }


}


