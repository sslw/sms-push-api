// function for convert to unicode

function toUnicode(theString) {
        var unicodeString = '';
        for (var i = 0; i < theString.length; i++) {
            var theUnicode = theString.charCodeAt(i).toString(16).toUpperCase();
            while (theUnicode.length < 4) {
                theUnicode = '0' + theUnicode;
            }
            unicodeString += theUnicode;
        }
        return unicodeString;
    }
    var str = 'আমার সোনার বাংলা।আমি তোমায় ভালবাসি।';
    // sample output : 098609AE09BE09B0002009B809CB09A809BE09B0002009AC09BE098209B209BE0964098609AE09BF002009A409CB09AE09BE09DF002009AD09BE09B209AC09BE09B809BF0964
    console.log(toUnicode(str));
