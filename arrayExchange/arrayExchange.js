function exchangeWith(a, b) {
  //save original a.length
  const lenA = a.length;
  //iterate backwards through b and transfer values to a
  for (i=b.length - 1; i >= 0; i--) {
    a.push(b.pop(i));
  }
  //iterate backward through a starting at A's original length, push to b and remove from a
  for (i=lenA - 1; i>= 0; i--) {
    b.push(a[i]);
    a.splice(i, 1);
  }
  return a, b;
}