//Solution by Pratik Das

/*
    here the base case is for n = 1 where ans is 6. Now with increase in n each common part will be ignored

    / \/ \
    |_|__|   => ans is 6*2 - (1 common part) = 11
    
    Thus in general ans will be (6*n) - (n-1)
*/

function matchHouses(n) {
    return ((6*n) - (n-1));
}

console.log(matchHouses(2));