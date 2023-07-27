function getSeason(month) {
  if ([1, 2, 12].includes(month)) {
    console.log("It's winter.");
    return;
  }

  if ([3, 4, 5].includes(month)) {
    console.log("It's spring.");
    return;
  }

  if ([9, 10, 11].includes(month)) {
    console.log("It's autumn.");
    return;
  }
  console.log("Invalid month number.");
}
var x = 20;
getSeason(x);
