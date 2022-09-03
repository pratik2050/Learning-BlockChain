//Question 2 by Pratik Das

function getGrade(marks) {
    var res = "Invalid Marks";

    switch(true) {
        case marks >= 90 && marks <= 100:
            res = "S Grade";
            break;
        case marks >= 80 && marks < 90:
            res = "A grade";
            break;
        case marks >= 70 && marks < 80:
            res = "B Grade";
            break;
        case marks >= 60 && marks < 70:
            res = "C Grade";
            break;
        case marks >= 50 && marks < 60:
            res = "D Grade";
            break;
        case marks >= 40 && marks < 50:
            res = "E Grade";
            break;
        case marks >= 0 && marks < 40:
            res = "Student has failed";
            break;
    }

    return res;
}

console.log(getGrade(95));