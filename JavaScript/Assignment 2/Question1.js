//Question 1 by Pratik Das

function getTriangle(s1, s2, s3) {
    if (s1 == s2 && s2 == s3) {
        return "Equilateral Triangle";
    } else if (s1 == s2 || s2 == s3 || s1 == s3) {
        return "Isosceles Traingle";
    } else
        return "Scalene Traingle";
}

console.log(getTriangle(3,4,5));