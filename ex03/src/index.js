function printManyTimes(str) {
    "use strict";
// Only change code below this line
const SENTENCE = str + " is cool!";
for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
}
return SENTENCE;
// Only chnage code above this line
}
printManyTimes("Arena");
module.exports = printManyTimes;