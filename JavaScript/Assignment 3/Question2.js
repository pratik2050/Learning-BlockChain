//Question 2 by Pratik Das

function isArmstrong(n) {
    var temp = n;

    while(temp >= 1) {
        n = n - Math.pow((temp%10), 3);     //deleting each cube digit one by one
                                            // 153 - 27 - 125 - 1 = 0 
        temp = Math.floor(temp/10);  
    }

    return n==0;            // if Armstrong n will be zero 
}

console.log(isArmstrong(407));