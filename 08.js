function calculateArea(radius) {
    let pi = 3.141592653589793238462643383279502884197;
    let area = pi * radius * radius;
    return area;
}

var circleRadius = 5;
console.log("Area of the circle:", calculateArea(circleRadius));