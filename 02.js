function getSeason(month) {
    switch (month) {
        case 1:
        case 2:
        case 12:
            console.log("It's winter.");
            return;
        case 3:
        case 4:
        case 5:
            console.log("It's spring.");
            return;
        case 6:
        case 7:
        case 8:
            console.log("It's summer.");
            return;
        case 9:
        case 10:
        case 11:
            console.log("It's autumn.");
            return;
        default:
            console.log("Invalid month number.");
    }
}

getSeason(x);

var x = 20;
