//Question 3 by Pratik Das

function findFac(n) {
    if (n == 0) {
        return 1;
    } 

    if (n < 0) {
        return "Invalid";
    }

    var k = 1;
    for(var i = 1; i<=n; i++) {
        k = k*i;
    }

    return k;
}

console.log(findFac(5));