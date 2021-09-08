const sumAll = function(firstNum, secondNum) {
    let sumTotal = 0,
    largerNum = 0,
    smallerNum = 0;


    if (firstNum > secondNum) {
        largerNum = firstNum;
        smallerNum = secondNum;
    } else {
        largerNum = secondNum;
        smallerNum = firstNum;
    }

// Get all the error throws in this statement.
    if (firstNum == NaN || secondNum == NaN
    || Math.sign(firstNum) == -1 
    || Math.sign(secondNum)  == -1 
    || typeof firstNum != 'number'
    || typeof secondNum != 'number') {
        return "ERROR"
    }

for (let i = smallerNum; i <= largerNum; i++) {
    sumTotal += i;
}

return sumTotal;

};

module.exports = sumAll;
