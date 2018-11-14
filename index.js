// Code your solutions in this file
function printBadges(array){
  for (let i = 0; i < array.length; i ++)
  console.log("Welcome " + array[i] + "! You are employee #" + (i + 1) +".")
  return array
}

function coinFlip(){
  return Math.random() >= 0.5;
}



function tailsNeverFails(){
  let tailsCount = 0
  while (coinFlip()){
    tailsCount++
  }
  return "You got " + tailsCount + " tails in a row!"
}
