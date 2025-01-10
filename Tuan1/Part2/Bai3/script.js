var Mark = {
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.mass / (this.height * this.height);
    }
}

var John = {
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.mass / (this.height * this.height);
    }
}

if(Mark.calcBMI() > John.calcBMI()){
    console.log(`Mark's BMI ${Mark.calcBMI().toFixed(2)} is higher than John's ${John.calcBMI().toFixed(2)}!`)
}else if(Mark.calcBMI() < John.calcBMI()){
    console.log(`John's BMI ${John.calcBMI().toFixed(2)} is higher than Mark's ${Mark.calcBMI().toFixed(2)}!`)
}else{
    console.log(`John's BMI ${John.calcBMI().toFixed(2)} is equal to Mark's ${Mark.calcBMI().toFixed(2)}!`)
}

