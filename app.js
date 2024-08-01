const sum = (a, b) => {
    return a + b;
}



// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euro) => {
    return oneEuroIs.USD * euro;
}

const fromDollarToYen = (dollar) => {
    // USD    1.07    10       
    // yen   156.5      x
    // proportional constant
    const proportionalConstant = oneEuroIs.USD/oneEuroIs.JPY; 
    //let yenRounded = Math.floor((oneEuroIs.JPY * dollar / oneEuroIs.USD) * 100) / 100
    let yen = dollar/proportionalConstant;
    return yen;
}

const fromYenToPound = (yen) => {
    // YEN    156.5    100       
    // pound   0.87      x
    //let poundRounded = Math.floor((oneEuroIs.GBP * yen / oneEuroIs.JPY) * 100) / 100
    //finding proportional constant
    const proportionalConstant = oneEuroIs.JPY/oneEuroIs.GBP;
    //Rounding the exchange from Yen To Pound
    let pound =yen/proportionalConstant;
    return pound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };