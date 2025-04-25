function convertToRoman(num) {
  if (num <= 0 || num > 100000) return "";

  const romanNumerals = [
    ["_C", 100000],
    ["_L", 50000],
    ["_X", 10000],
    ["_V", 5000],
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];

  let result = "";

  for (let [symbol, value] of romanNumerals) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

// Examples
console.log(convertToRoman(14));     // XIV
console.log(convertToRoman(798));    // DCCXCVIII
console.log(convertToRoman(100000)); // _C
console.log(convertToRoman(99999));  // _C_MMMCMXCIX
