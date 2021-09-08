const removeFromArray = function() {
    let firstArg = Array.from(arguments[0])
  
      for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < firstArg.length; j++) {
          if (firstArg[j] === arguments[i]) {
            firstArg.splice(j, 1);
          }
        }
      }
    return firstArg;
  };

module.exports = removeFromArray;
