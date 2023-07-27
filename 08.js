function calculateArea(radius) {
  var pi = Math.PI;
  var area = pi * radius * radius;
  return area;
}

var circleRadius = 5;
console.log("Area of the circle:", calculateArea(circleRadius));
