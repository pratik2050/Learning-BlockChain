//Question 4 by Pratik Das

function findFac(n) {
    if (n == 0) {           //function to find factorial of n
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

function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    for(var i = 2; i <= Math.sqrt(n); i++) {    //as divisors appear in pair we can loop upto root(n)
        if(n%i == 0)
            return false;
    }

    return true;
}

function main(x, y) {
    for(var i = x; i<=y; i++) {             //main function
        if(isPrime(i)) {
            console.log("Factorial of Prime Number " + i + " is " + findFac(i));
        }
    }
}

console.log(main(1,1000));