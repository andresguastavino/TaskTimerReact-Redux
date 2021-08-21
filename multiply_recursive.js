const multiply = (multiplicand, multiplier) => {
    return multiply_recursive(multiplicand, multiplier, 0, 1);
}

const multiply_recursive = (multiplicand, multiplier, total, index) => {
    total += multiplicand;
    return multiplier === index ? total : multiply_recursive(multiplicand, multiplier, total, index+1);
}

console.log(multiply(2, 2));
console.log(multiply(3, 6));