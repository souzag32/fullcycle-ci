const { sum, sub, pow, times } = require("./math");

test("sum (1, 2) to be equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("sub (1, 2) to be equal -1", () => {
    expect(sub(1, 2)).toBe(-1);
});

test("times (2, 2) to be equal 4", () => {
    expect(times(2, 2)).toBe(4);
});

test("pow(2, 3) to be equal 8", () => {
    expect(pow(2, 3)).toBe(8);
});
