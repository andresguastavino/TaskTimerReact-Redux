/**
 * ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
 * ROT13 is an example of the Caesar cipher.
 * 
 * Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special 
 * characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet 
 * should be shifted, like in the original Rot13 "implementation".
 */

const rot13 = (message) => {
    return [... message]
        .map(letter => letter.match(/[a-z]/gi) ? switchLetter(letter, 1) : letter)
        .join('');
}

const switchLetter = (letter, index) => {
    if(index > 13) {
        return letter;
    }

    return String.fromCharCode(letter.charCodeAt(0)).match(/z/gi) ? 
        switchLetter(String.fromCharCode(letter.charCodeAt(0) - 25), index + 1) :
        switchLetter(String.fromCharCode(letter.charCodeAt(0) + 1), index + 1);
}

console.log(rot13(`abc+=?-A'Test=!21test`));


