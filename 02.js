function getSeason(month) {
    const seasons = [
        "It's winter.",
        "It's spring.",
        "It's summer.",
        "It's autumn."
    ];

    const seasonIndex = (month % 12 + 12) % 12; // Handle negative month values

    if (seasonIndex >= 0 && seasonIndex <= 2) {
        console.log(seasons[0]); // Winter
    } else if (seasonIndex >= 3 && seasonIndex <= 5) {
        console.log(seasons[1]); // Spring
    } else if (seasonIndex >= 6 && seasonIndex <= 8) {
        console.log(seasons[2]); // Summer
    } else if (seasonIndex >= 9 && seasonIndex <= 11) {
        console.log(seasons[3]); // Autumn
    } else {
        console.log("Invalid month number.");
    }
}
var x = 20;

getSeason(x);

