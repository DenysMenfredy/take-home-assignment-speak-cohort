
const sum = (a, b) => a + b;

test("Sum test", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 2)).not.toBe(4);
});