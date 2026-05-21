const palindromes = function (str) {
    const valid = "abcdefghijklmnopqrstuvwxyz0123456789";

    const filtered = str.toLowerCase().split('').filter((ch) => valid.includes(ch)).join('');
    return filtered === filtered.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
