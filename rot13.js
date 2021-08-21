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


