const arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6]
  ];

function sort3(arr) {
    arr.sort(function(a, b) {
        return a.reduce(reduceFunc) - b.reduce(reduceFunc);
    })
    return arr; 
}

function reduceFunc(c, d) {
    return c + d;
}

sort3(arr);