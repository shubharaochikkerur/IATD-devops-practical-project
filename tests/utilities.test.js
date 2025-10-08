import { isValidDateString, wrapString } from "../src/utilities";

test("wrapString: wrap single word over two lines", () => {
    expect(wrapString("Long", 3)).toBe("Lo-\nng");
});

test("wrapString: wrap multiple words over two lines", () => {
    expect(wrapString("Too long", 4)).toBe("Too\nlong");
});

test("wrapString: wrap complex sentence", () => {
    expect(wrapString("This is a complex sentence that needs to be wrapped", 6)).toBe("This\nis a\ncompl-\nex se-\nntence\nthat\nneeds\nto be\nwrapp-\ned");
});

// PLACE TESTS FOR isValidDateString UNDER HERE
test("isValidDateString: valid date string", () =>{
    expect(isValidDateString("37/10/2025")).toBe(false);//37 days do not exist
});
// Test for invalid string

// Test for the wrong amount of "date segments" (see comments in utilities.js for more info)
test("isValidDateString: valid date string", () =>{
    expect(isValidDateString("10/2025")).toBe(false);
});
// Test for wrong number of digits in the day
test("isValidDateString: valid date string", () =>{
    expect(isValidDateString("101")).toBe(false);
});
// Test for wrong number of digits in the month

// Test for wrong number of digits in the year

// Test for day outside of month's number of days

// Test for month greater than 12

// Test for day <= 0