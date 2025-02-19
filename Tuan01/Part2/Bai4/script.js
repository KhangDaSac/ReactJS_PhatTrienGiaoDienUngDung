var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var tips = [];
var totals = [];

var calcTip = (value)=>{
    return value >= 50 && value <= 300 ? 0.15 * value : 0.2 * value;
}

bills.forEach((value, index) =>{
    let tip = calcTip(value);
    tips.push(tip);
    totals.push(value + tip);
    console.log(`STT ${index + 1}: Giá trị bill là ${bills[index]}, tiền tip là ${tips[index]}, tổng là: ${totals[index]}`)
});

var calcAverage = (arr) =>{
    var sum = 0;
    arr.forEach((value) => {
        sum += value;
    });
    return sum/arr.length;
}

console.log(`Trung bình tổng tiền là: ${calcAverage(totals)}`)