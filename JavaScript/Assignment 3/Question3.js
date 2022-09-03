//Question 3 by Pratik Das

function findFac(n) {
    if (n == 0) {
        return 1;               //function of finding factorial
    } 

    var k = 1;
    for(var i = 1; i<=n; i++) {
        k = k*i;
    }

    return k;
}

function isSpecial(n) {
    var temp = n;

    while(temp >= 1) {
        n = n - findFac(temp%10);       //deleting factorial of each digit one by one
                                        //145 - 5! - 4! - 1! = 0
        temp = Math.floor(temp/10);  
    }

    return n==0;            // if Special n will be zero 
}


console.log(isSpecial(140));