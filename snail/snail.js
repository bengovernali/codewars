snail = function(array) {
    let result = [];
    
    while (array !== undefined || array.length != 0) {
     
     console.log(array[0]);
     
     //if statement to handle if array[0] is undefined, kept running into this issue
     if (array[0] === undefined) {
       break;
     }
     
     //push first row to the result
      array[0].forEach((num) => {
        result.push(num);
      })
      array.splice(0, 1);
      
      //push the last element in each row to the result and remove those elements
      for (i=0; i < array.length; i++) {
        result.push(array[i][array[i].length - 1]);
        array[i].splice(array[i].length - 1, 1);
      }
      
      //push bottom row (except last element) to result and remove the row
      for (i=array.length - 1; i >= 0; i--) {
        result.push(array[array.length - 1][i]);
      }
      array.splice(array.length - 1, 1);
      
      //push first column ascending into result and remove elements from array
      for (i=array.length - 1; i >= 0; i--) {
        result.push(array[i][0]);
        array[i].splice(0, 1);
      }
      
    }
    //return result
    return(result);
  }