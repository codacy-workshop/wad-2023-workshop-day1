function getSeason(month) {
    switch (month) {
        case 12:
            console.log("It's winter.");
            break;
        case 5:
            console.log("It's spring.");
            break;
        case 8:
            console.log("It's summer.");
            break;
        case 11:
            console.log("It's autumn.");
            break
        default:
            console.log("Invalid month number.");
            break;
    }
}

const x = 20;
getSeason(x);

