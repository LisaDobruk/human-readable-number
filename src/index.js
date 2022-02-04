module.exports = function toReadable (number) {
  let beforeTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  if(number <= 9){
         return beforeTen[number];
  }
  let beforeTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  if(number >=10 && number <= 19){
      let str = String(number);
      let numStr = str[1];
      return beforeTwenty[numStr];
  }
  let decades = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if(number >= 20 && number <= 99){
      let firstStrNum = String(number)[0];
      let secondStrNum = String(number)[1];
      if(secondStrNum == 0){
          return decades[firstStrNum - 2];
      }
      return decades[firstStrNum - 2] + ' ' + beforeTen[secondStrNum];
  }
  if(number == 100){
      return 'one hundred';
  }
  if(number > 100 && number <= 999){
    let firstStrNum = String(number)[0];
    let secondStrNum = String(number)[1];
    let thirdStrNum = String(number)[2];
    let firstNum = beforeTen[firstStrNum] + ' hundred';
    if(secondStrNum == 0 && thirdStrNum == 0){
        return firstNum;
    }else if(secondStrNum == 0){
        return firstNum + ' ' + beforeTen[thirdStrNum];
    }else if(secondStrNum == 1){
        return firstNum + ' ' + beforeTwenty[thirdStrNum];
    }else if(thirdStrNum == 0){
        return firstNum + ' ' + decades[secondStrNum - 2]; 
    }else{
        return firstNum + ' ' + decades[secondStrNum - 2] + ' ' + beforeTen[thirdStrNum];
    }
  }
}
