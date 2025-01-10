var calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3);
}

var checkWinner = (avgDolhins, avgKoalas) => {
    if (avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolhins điểm trung bình: ${avgDolhins}`);
        console.log(`Koalas điểm trung bình: ${avgKoalas}`);
        console.log(`Dolhins thắng`);
    } else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`Dolhins điểm trung bình: ${avgDolhins}`);
        console.log(`Koalas điểm trung bình: ${avgKoalas}`);
        console.log(`Koalas thắng`);
    } else {
        console.log(`Dolhins điểm trung bình: ${avgDolhins}`);
        console.log(`Koalas điểm trung bình: ${avgKoalas}`);
        console.log(`Không có đội thắng`);
    }
}

console.log(`Test 1`)
var avgDolhins1 = calcAverage(44, 23, 71);
var avgKoalas1 = calcAverage(65, 54, 49);
checkWinner(avgDolhins1, avgKoalas1);

console.log(`Test 2`)
var avgDolhins1 = calcAverage(85, 54, 41);
var avgKoalas1 = calcAverage(23, 34, 27);
checkWinner(avgDolhins1, avgKoalas1);
