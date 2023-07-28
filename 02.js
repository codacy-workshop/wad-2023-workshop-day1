function getSeason(month) {
    var winter = [1, 2, 12];
    var spring = [3, 4, 5];
    var summer = [6, 7, 8];
    var autumn = [9, 10, 11];
    if(winter.filter(e => e === month)) {
        console.log("It's winter.");
    }else if(spring.filter(e => e === month)) {
        console.log("It's spring.");
    }else if(summer.filter(e => e === month)) {
        console.log("It's summer.");
    }else if(autumn.filter(e => e === month)) {
        console.log("It's autumn.");
    } else {
        console.log("Invalid month number.");
    }
}
var x = 20;

getSeason(x);

