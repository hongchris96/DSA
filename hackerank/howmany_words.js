// how many are words in a string

function howMany(sentence) {
  // Write your code here
  let alph = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-";
  let noComma = sentence.split(',').join('');
  let noPeriod = noComma.split('.').join('');
  let noPoint = noPeriod.split('!').join('');
  let noQuestion = noPoint.split('?').join('');
  let noSpace = noQuestion.split(' ');
  let noNum = noSpace.filter(ele => ele.split("").every(l => alph.includes(l)) && ele.length);
  console.log(noNum);
  return noNum.length; 
}