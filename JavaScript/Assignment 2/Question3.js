//Question 3 by Pratik Das

function findMultipleSum() {
    let res = 0;

    for(let i = 0; i<1000; i++) {
        if (i%3 == 0 && i%5 == 0) {
            res = res + i;
        }
    }

    return res;
}

console.log(findMultipleSum());