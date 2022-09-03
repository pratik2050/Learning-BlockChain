//Question 1 by Pratik Das

function printPattern(n) {
    var curr = 0;               //used to track record of each element

    for(var i = 1; i<=n; i++) {
        var array = [];             //storing each line in an array
        for(var j = 1; j <= i; j++) {
            curr++;
            array.push(curr);
        }
        console.log(array.join(' '));       //joining the array elements and the printing 
    }
}

printPattern(5);