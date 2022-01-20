"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getObjectEntries = function (obj) {
    var ownProps = Object.keys(obj), i = ownProps.length, resArray = new Array(i);
    while (i--)
        resArray[i] = [ownProps[i], obj[ownProps[i]]];
    return resArray;
};
exports.default = getObjectEntries;
