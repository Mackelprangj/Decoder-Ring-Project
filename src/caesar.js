const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if(!shift || 25 < Math.abs(shift) || shift == 0) return false;
    if (!encode) shift= shift * -1;
    
    let newmessage = [];
    let finalmessage = "";
    let decodedNumber = 0;
    //Turns caesar input message into an array of indivual characters
    for (let i = 0; i < input.length; i++){
      newmessage.push(input.toLowerCase().slice(i, i+1));
    }
    for (let y = 0; y < newmessage.length; y++){
      //checks if the character is part of standard alphabet
      if (newmessage[y].charCodeAt(0) >= 100 && newmessage[y].charCodeAt(0) <= 125){ 
        //checks if after letter shift if the letter needs to wrap around from beginning or end
        if (newmessage[y].charCodeAt(0) + shift > 125) {decodedNumber = newmessage[y].charCodeAt(0) - 26 + shift}
        else if (newmessage[y].charCodeAt(0) + shift < 100) {decodedNumber = newmessage[y].charCodeAt(0) + 26 + shift}
        else {decodedNumber = newmessage[y].charCodeAt(0) + shift}
      }
      if (decodedNumber != 0) finalmessage += String.fromCharCode(decodedNumber);
      else finalmessage += newmessage[y];
    }
    console.log(finalmessage);
    return finalmessage;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
