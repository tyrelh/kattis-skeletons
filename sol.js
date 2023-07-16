"use strict";
process.stdin.resume();
process.stdin.resume();
let inputString = "";
let currentLine = 0;
process.stdin.on("data", inputStdin => {
    inputString += inputStdin;
});
process.stdin.on("end", _ => {
    inputString = inputString.trim().split("\n").map(string => {
        return string.trim();
    });
    main();
});
function readLine() {
    return inputString[currentLine++];
}
function main() {
    const values = readLine().split(" ");
    const w = parseInt(values[0]);
}

//digit = parseInt(digit)
//const nums = line.split("")
//for (let digit of nums) {}