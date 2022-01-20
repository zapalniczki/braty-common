"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var getTypeOfRemoteConfigKey = function (query) {
    var entries = getObjectEntries(__1.remoteConfig._getCached().shape);
    var remoteConfigKeysWithTypes = entries.map(function (_a) {
        var key = _a[0], value = _a[1];
        return ({
            key: key,
            type: value._def.typeName
        });
    });
    //   const thisKey = remoteConfigKeysWithTypes.find((key) => key.key === query)
    var thisKey;
    for (var index = 0; index < remoteConfigKeysWithTypes.length; index++) {
        var currentKey = remoteConfigKeysWithTypes[index];
        if (currentKey.key === query) {
            thisKey = currentKey;
            break;
        }
    }
    if (!thisKey) {
        return undefined;
    }
    return thisKey.type;
};
exports.default = getTypeOfRemoteConfigKey;
var getObjectEntries = function (obj) {
    var ownProps = Object.keys(obj), i = ownProps.length, resArray = new Array(i);
    while (i--)
        resArray[i] = [ownProps[i], obj[ownProps[i]]];
    return resArray;
};
