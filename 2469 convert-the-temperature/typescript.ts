/*
 * @lc app=leetcode id=2469 lang=typescript
 *
 * [2469] Convert the Temperature
 */

// @lc code=start
function convertTemperature(celsius: number): number[] {
    const kelvin = celsius + 273.15;
    const fahrenheit = celsius * 1.8 + 32;

    return [kelvin, fahrenheit];
}
// @lc code=end
