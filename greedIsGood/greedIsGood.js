function score( dice ) {
    //initialize the score at 0
    let score = 0;
    //sort the given array and store in new variable
    let roll = dice.sort();
    //start a for loop to determine if any number pops up 3 times
    for (i=0; i < roll.length; i++) {
      //check if next two values in roll are the same as the current value
      if ((roll[i] === roll[i+1]) && (roll[i] === roll[i+2])) {
        //if roll[i] is 1, add 1000 to score, otherwise add roll[i] * 100;
        if (roll[i] === 1) {
          score += 1000;
        } else {
          score += roll[i] * 100;
        }
        //remove roll[i] and the next two values from the roll
        roll.splice(i, 3);
        //reset i to i-1 since that value has now been removed
        //the next value to be checked will take its place
        i -= 1;
      }
      //ternary to handle individual values
      roll[i] === 1 ? score += 100 :
      roll[i] === 5 ? score += 50:
      null;
    }
    //return the score
    return score;
  }