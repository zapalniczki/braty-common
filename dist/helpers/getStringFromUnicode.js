"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTextFromUnicode(unicode) {
    var len = unicode.length;
    var characters = [];
    for (var index = 0; index < len; index++) {
        var code = unicode[index];
        var char = String.fromCharCode(code);
        characters.push(char);
    }
    var str = characters.join('');
    return str;
}
exports.default = getTextFromUnicode;
