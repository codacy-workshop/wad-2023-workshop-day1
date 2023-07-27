function getSeason(month) {
    if (!isNonLogableMonth(x)) {
        switch (month) {
            case 12:
                console.log("It's winter.");
            case 5:
                console.log("It's spring.");
            case 8:
                console.log("It's summer.");
            case 11:
                console.log("It's autumn.");
            default:
                console.log("Invalid month number.");
        }
    }
    
}

function isNonLogableMonth(x) {
    return x === 1 || x === 2 || x === 3 || x === 4 || x === 6 || x === 7 || x === 9 || x === 10
}

const x = 20;

getSeason(x);


