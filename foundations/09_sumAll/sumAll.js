const sumAll = function(a, b) {
    if (a < 0 || b < 0 || typeof a !== 'number' || typeof b !== 'number' || !Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    }
    let acc = 0;
    const from = Math.min(a, b);
    const to = Math.max(a, b);
    for (let i = from; i <=to; i++) {
        acc += i;
    }
    return acc;
};

// Do not edit below this line
module.exports = sumAll;
