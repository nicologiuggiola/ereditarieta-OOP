const result = Math.sqrt(64);
console.log(result);

let pointA = new Point(3, 5);
let pointB = new Point(6, 1);

const distance = MathC.calculateDistance(pointA, pointB)

console.log(distance);


let pointC = new Point(6,3);
let pointD = new Point(7,3);

const mediaPoint = MathC.medianPoint(pointC, pointD);
const distance2 = MathC.distanceFromOrigin(pointC);

const nearest = MathC.nearestPoint(pointA, pointB, pointC, pointD)

console.log(mediaPoint);
console.log(distance2);

console.log(nearest);
