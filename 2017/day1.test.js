const captcha = require('./day/1/part1');
const captcha2 = require('./day/1/part2');

describe('day 1: Inverse Captcha', () => {
    describe('part 1', () => {
        test('test input', () => {
            expect(captcha('1122')).toBe(3);
            expect(captcha('1111')).toBe(4);
            expect(captcha('1234')).toBe(0);
            expect(captcha('91212129')).toBe(9);
        });
    });

    describe('part 2', () => {
        test('test input', () => {
            expect(captcha2('1212')).toBe(6);
            expect(captcha2('1221')).toBe(0);
            expect(captcha2('123425')).toBe(4);
            expect(captcha2('123123')).toBe(12);
            expect(captcha2('12131415')).toBe(4);
        });
    });
});