function getSeason(month) {
  if (isWinter(month)) {
    console.log("It's winter.");
  } else if (isSpring(month)) {
    console.log("It's spring.");
  } else if (isSummer(month)) {
    console.log("It's summer.");
  } else if (isAutumn(month)) {
    console.log("It's autumn.");
  } else {
    console.log("Invalid month number.");
  }
}

function isWinter(month) {
  return month === 12 || month === 1 || month === 2;
}

function isSpring(month) {
  return month >= 3 && month <= 5;
}

function isSummer(month) {
  return month >= 6 && month <= 8;
}

function isAutumn(month) {
  return month >= 9 && month <= 11;
}

var x = 20;
getSeason(x);
