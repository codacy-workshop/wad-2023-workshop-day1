const nonLogable = [1, 2, 3, 4, 6, 7, 9, 10]

function getSeason(month) {
    if (!isNonLogableMonth(month)) {
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
    return nonLogable.includes(x)
}

const x = 20;

getSeason(x);


