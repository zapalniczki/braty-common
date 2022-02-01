"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getUnicodeFromString = function (str) {
    var letters = str.split('');
    var unicodes = letters.map(function (letter) { return letter.charCodeAt(0); });
    return unicodes;
};
exports.default = getUnicodeFromString;
