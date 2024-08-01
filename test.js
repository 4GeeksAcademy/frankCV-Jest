//Import the function sum from the app.js file
//'./' this means that to find some root with file's name

const { sum } = require('./app.js')

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
    // "JPY": 156.5, // japan yen
    // "USD": 1.07, // us dollar
    // "GBP": 0.87, // british pound
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');
    // Use the function like its supposed to be used
    const dollars = fromDollarToYen(10);
    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 10 * 15650 / 107;
    // This is the comparison for the unit test
    expect(dollars).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
//test for Yen to Pound
test("Two hundred yens should be 1,11  pounds", function () {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');
    // Use the function like its supposed to be used
    const dollars = fromYenToPound(200);
    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 200 * 87 / 15650;
    console.log(String(expected).length);
    // This is the comparison for the unit test
    expect(fromYenToPound(200)).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
///trying multiple test cases in a block
describe.each([
    [500, 500 * 87 / 15650],
    [400, 400 * 87 / 15650],
    [300, 300 * 87 / 15650],
])('.add(%i, %i)', (a, expected) => {
    test(`returns ${expected}`, () => {
        const { fromYenToPound } = require('./app.js');
        const dollars = fromYenToPound(a);
        expect(dollars).toBe(expected,6);
    });
    test(`returned value not be greater than ${expected}`, () => {
        const { fromYenToPound } = require('./app.js');
        const dollars = fromYenToPound(a);
        expect(dollars).toBeCloseTo(expected,7);
    });
    test(`returned value not be less than ${expected}`, () => {
        const { fromYenToPound } = require('./app.js');
        const dollars = fromYenToPound(a);
        expect(dollars).toBeCloseTo(expected,8);
    });
});