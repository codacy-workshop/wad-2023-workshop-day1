function getSeason(month) {
    switch (month) {
        case 1:
        case 2:
        case 12:
            console.log("It's winter.");
        case 3:
        case 4:
        case 5:
            console.log("It's spring.");
        case 6:
        case 7:
        case 8:
            console.log("It's summer.");
        case 9:
        case 10:
        case 11:
            console.log("It's autumn.");
        default:
            console.log("Invalid month number.");
    }
}

getSeason(x);

var x = 20;
