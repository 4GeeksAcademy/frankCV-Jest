//Import the function sum from the app.js file
//'./' this means that to find some root with file's name

const { sum} = require('./app.js')

// My first test

test('adds 100 + 50 to equal 150', () => {

    //here we will call our function
    let total = sum(100, 50);


    //here we will write what we expect to be, in this case is 150
    expect(total).toBe(150);
});

// Test for Euro to Dollar
test('One euro should be 1.07 dollars', function () {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // This is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});


//Test for Dollar to Yen
test("Ten dollars should be 1,462.61", function () {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromDollarToYen(10);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 1462.61;

    // This is the comparison for the unit test
    expect(fromDollarToYen(10)).toBe(1462.61); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

//test for Yen to Pound
test("Two hundred yens should be 1,11  pounds", function () {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromYenToPound(200);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 1.11;

    // This is the comparison for the unit test
    expect(fromYenToPound(200)).toBe(1.11); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})