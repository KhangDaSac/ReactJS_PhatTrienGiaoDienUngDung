var calcTip = (value)=>{
    return value >= 50 && value <= 300 ? 0.15 * value : 0.2 * value;
}

var bills = [125, 555, 44];
var tips = [];
var totals = [];
bills.forEach((value, index) =>{
    let tip = calcTip(value);
    tips.push(tip);
    totals.push(value + tip);
    console.log(`STT ${index + 1}: Giá trị bill là ${bills[index]}, tiền tip là ${tips[index]}, tổng là: ${totals[index]}`)
});