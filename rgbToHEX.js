/**
 * The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a 
 * hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that 
 * fall out of that range must be rounded to the closest valid value.
 * 
 * Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
 * 
 * The following are examples of expected output values:
 * rgb(255, 255, 255) // returns FFFFFF
 * rgb(255, 255, 300) // returns FFFFFF
 * rgb(0,0,0) // returns 000000
 * rgb(148, 0, 211) // returns 9400D3
 */


 const rgb = (r, g, b) => {
    return [r, g, b]
        .map(val => {
            const result = (val > 0 ? val / 16 <= 15.99 ? val / 16 : 15.99 : 0) + '';
            let firstDigit = parseInt(result.split('.')[0]);
            firstDigit = firstDigit < 15 ? firstDigit : 15;
            firstDigit = numberToLetter(firstDigit + '');
            let secondDigit = parseFloat(`.${result.split('.')[1]}`) * 16;
            secondDigit = isNaN(secondDigit) ? 0 : secondDigit < 15 ? secondDigit : 15;
            secondDigit = numberToLetter(secondDigit + '');
            return `${firstDigit}${secondDigit}`;
        })
        .join('');
}

const numberToLetter = (val) => {
    const match = val.match(/[101112131415]/g); 
    const convertedVal = match && [... '0ABCDEF'][parseInt(match[0])+parseInt(match[1])];
    return convertedVal ? convertedVal : val
}

console.log(rgb(255, 255, 255));
console.log(rgb(0, 0, 0));
console.log(rgb(148, 0, 211));
