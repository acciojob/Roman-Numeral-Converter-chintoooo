function convertToRoman(num) {
  if (num <= 0) return "";

  const romanSymbols = [
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

  let roman = "";

  for (let i = 0; i < romanSymbols.length; i++) {
    while (num >= romanSymbols[i][1]) {
      roman += romanSymbols[i][0];
      num -= romanSymbols[i][1];
    }
  }

  return roman;
}
