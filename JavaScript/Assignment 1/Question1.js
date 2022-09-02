//Question 1 By Pratik Das

function findLeap(year) {
  var info;

  if (year % 400 == 0) {
    info = ("It is a Leap Year");
  } else if (year % 100 == 0) {
    info = ("It is not a Leap Year");
  } else if (year % 4 == 0) {
    info = ("It is a Leap Year");
  } else {
    info = ("It is not a Leap Year");
  }

  return info;
}

console.log(findLeap(2100));