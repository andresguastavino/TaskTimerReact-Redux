const zero = (op) => op ? op(0) : 0;

const one = (op) => op ? op(1) : 1;

const two = (op) => op ? op(2) : 2;

const three = (op) => op ? op(3) : 3;

const four = (op) => op ? op(4) : 4;

const five = (op) => op ? op(5) : 5;

const six = (op) => op ? op(6) : 6;

const seven = (op) => op ? op(7) : 7;

const eight = (op) => op ? op(8) : 8;

const nine = (op) => op ? op(9) : 9;

const plus = (r) => {
    return function(l) {
        return l + r;
    }
}

const minus = (r) => {
    return function(l) {
        return l - r;
    }
}

const times = (r) => {
    return function(l) {
        return l * r;
    }
}

const dividedBy = (r) => {
    return function(l) {
        return l / r;
    }
}


console.log(seven(times(five())));
/**
 * Explanation of what happened before
 * 1. seven(times(five()))
 * 2. seven(times(5)) => because when five is called like five(), op = undefined
 * 3. times(5) returns the callback function(l) { return l * r } with r being 5 so => function(l) { return l * 5 }
 * 4. seven(function(l)) => function(l) = op
 * 5. op(7) is called so function(l) { return l * r } turns to function(7) { return 7 * r } and r was already 5 so it returns 7 * 5
 */

console.log(seven(plus(three())));
console.log(eight(dividedBy(four())));
console.log(five(minus(two())));


