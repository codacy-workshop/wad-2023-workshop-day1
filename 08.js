function calculateArea(radius) {
    var pi = 3.1415926535898;
    var area = pi * radius * radius;
    return area;
}

var circleRadius = 5;
console.log("Area of the circle:", calculateArea(circleRadius));