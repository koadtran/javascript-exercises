const fibonacci = function(n) {
    let num;
    if (typeof num !== "number") {
        num = parseInt(n);
    } else {
        num = n;
    }

    if (n < 0) return "OOPS";
    if (n == 0) return 0;

    let first = 0;
    let second = 1;
    for (let i = 2; i <= num; i++) {
        let current = first + second;
        first = second;
        second = current;
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
