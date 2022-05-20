// Write your code below this line
function decode(string) {
    const shiftVal = string[0];
    let answer = "";
    for(let i = 1; i < string.length; ++i) {
        answer += String.fromCharCode(string[i].charCodeAt(0) + Number(shiftVal));
    }
    return answer;
}

console.log(decode("1a"));
console.log(decode("3ce"));
console.log(decode("2fcjjm"));