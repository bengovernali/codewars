function digital_root(n) {
    let sum = sumDigits(n);
    while (sum.toString().length > 1) {
      sum = sumDigits(sum);
    }
    return sum;
  }
  
  function sumDigits(num) {
    let sum = 0;
    while (num) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }