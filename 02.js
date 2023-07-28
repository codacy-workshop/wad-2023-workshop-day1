function getSeason(month) {
    if (month === 1 || month === 2 || month === 12) {
        console.log("It's winter.");
    } else if (month >= 3 && month <= 5) {
        console.log("It's spring.");
    } else if (month >= 6 && month <= 8) {
        console.log("It's summer.");
    } else if (month >= 9 && month <= 11) {
        console.log("It's autumn.");
    } else {
        console.log("Invalid month number.");
    }
}

var x = 20;
getSeason(x);
