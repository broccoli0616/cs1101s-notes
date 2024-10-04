function triangle_numbers(n){
    function helper(counter, n, result){
        return n + 1 === counter 
               ? result 
               : helper(counter + 1, n, counter + result);
    }
    return helper(0, n, 0);
}

triangle_numbers(7);








