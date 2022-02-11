"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var getLanguageEnv = function () {
    var language = 'pl';
    if (process.env.LANGUAGE) {
        language = __1.language.parse(process.env.LANGUAGE);
    }
    return language;
};
exports.default = getLanguageEnv;
