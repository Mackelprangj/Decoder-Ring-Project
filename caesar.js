const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if(!shift || 25 < Math.abs(shift) || shift == 0) return false;
    if (!encode) shift= shift * -1;
    
    let newmessage = [];
    let finalmessage = "";
    let decodedNumber = 0;
    let currentChar = 0;
    //Turns caesar input message into an array of indivual characters
    for (let i = 0; i < input.length; i++){
      newmessage.push(input.toLowerCase().slice(i, i+1));
    }
    for (let y = 0; y < newmessage.length; y++){
        decodedNumber = 0;
        currentChar = newmessage[y].charCodeAt(0);
      //checks if the character is part of standard alphabet
      if (currentChar >= 97 && currentChar <= 122){ 
        //checks if after letter shift if the letter needs to wrap around from beginning or end
        if (currentChar + shift > 122) {decodedNumber = currentChar - 26 + shift}
        else if (currentChar + shift < 97) {decodedNumber = currentChar + 26 + shift}
        else {decodedNumber = currentChar + shift}
      }
      if (decodedNumber != 0) finalmessage += String.fromCharCode(decodedNumber);
      else finalmessage += newmessage[y];
    }
    return finalmessage;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
