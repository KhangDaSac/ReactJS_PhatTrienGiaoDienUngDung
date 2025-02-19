function averagePoints(point1, point2, point3) {
    return (point1 + point2 + point3) / 3;
}

console.log("Test: 1");
let pointDolphins = averagePoints(96, 108, 89);
let pointKoalas = averagePoints(88, 91, 110);
console.log("Điểm của đội Dolphins: ", pointDolphins.toFixed(2));
console.log("Điểm của đội Koalas: ", pointKoalas.toFixed(2));

if (pointDolphins > pointKoalas && pointDolphins >= 100) {
    console.log("Dolphins thắng cúp!");
} else if (pointDolphins < pointKoalas && pointKoalas >= 100) {
    console.log("Koalas thắng cúp!");
} else if (
    pointDolphins >= 100 &&
    pointKoalas >= 100 &&
    pointDolphins === pointKoalas
) {
    console.log("Hòa!");
} else {
    console.log("Không đội nào thắng");
}

console.log("Test: 2");
let pointDolphins2 = averagePoints(97, 112, 101);
let pointKoalas2 = averagePoints(109, 95, 123);
console.log("Điểm của đội Dolphins: ", pointDolphins2.toFixed(2));
console.log("Điểm của đội Koalas: ", pointKoalas2.toFixed(2));

if (pointDolphins2 > pointKoalas2 && pointDolphins2 >= 100) {
    console.log("Dolphins thắng cúp!");
} else if (pointDolphins2 < pointKoalas2 && pointKoalas2 >= 100) {
    console.log("Koalas thắng cúp!");
} else if (
    pointDolphins2 >= 100 &&
    pointKoalas2 >= 100 &&
    pointDolphins2 === pointKoalas2
) {
    console.log("Hòa!");
} else {
    console.log("Không đội nào thắng");
}

console.log("Test: 3");
let pointDolphins3 = averagePoints(97, 112, 101);
let pointKoalas3 = averagePoints(109, 95, 106);
console.log("Điểm của đội Dolphins: ", pointDolphins3.toFixed(2));
console.log("Điểm của đội Koalas: ", pointKoalas3.toFixed(2));

if (pointDolphins3 > pointKoalas3 && pointDolphins3 >= 100) {
    console.log("Dolphins thắng cúp!");
} else if (pointDolphins3 < pointKoalas3 && pointKoalas3 >= 100) {
    console.log("Koalas thắng cúp!");
} else if (
    pointDolphins3 >= 100 &&
    pointKoalas3 >= 100 &&
    pointDolphins3 === pointKoalas3
) {
    console.log("Hòa!");
} else {
    console.log("Không đội nào thắng");
}
