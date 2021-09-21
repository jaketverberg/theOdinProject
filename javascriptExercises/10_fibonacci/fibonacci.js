const fibonacci = function(n) {
    let fibStart = [1, 1];
  
    if (n < 0) {
      return "OOPS";
    }
  
    for (let i = 0; i <= n-3; i++) {
      let lastFib = fibStart[fibStart.length-1];
      let secondLastFib = fibStart[fibStart.length-2];
      let toPushFib = lastFib + secondLastFib;
  
      fibStart.push(toPushFib);
    }
  
  return fibStart[fibStart.length-1];
  
  };

module.exports = fibonacci;
