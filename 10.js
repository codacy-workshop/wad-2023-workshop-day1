function generatePattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 0; j <= i; j++) {
            pattern += j;
        }
        console.log(pattern);
    }
}

generatePattern(5);