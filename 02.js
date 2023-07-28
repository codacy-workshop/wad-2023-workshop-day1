function getSeason(month) {
    if (isWinter()) console.log("It's winter.");
    else if (isSpring()) console.log("It's spring.");
    else if (isSummer()) console.log("It's summer.");
    else if (isAutumn()) console.log("It's autumn.");
    else console.log("Invalid month number.");
}

isWinter() {
    return month === 1 || month === 2 || month === 3;
}
isSpring() {
    return month === 3 || month === 4 || month === 5;
}
isSummer() {
    return month === 6 || month === 7 || month === 8;
}
isAutumn() {
    return month === 9 || month === 10 || month === 11;
}

getSeason(x);
