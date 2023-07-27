function parseAndSumNumbers(input) {
  if (input === "") {
    return null;
  }

  let result = 0;
  for (let i = 0; i < input.length; i++) {
    result += Number(input[i]);
  }

  return result;
}

const inputString = "12345";
const output = parseAndSumNumbers(inputString);
console.log("Output:", output);
