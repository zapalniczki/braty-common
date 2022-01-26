"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var helpers_1 = require("../helpers");
var getTypeOfRemoteConfigKey = function (query) {
    var entries = (0, helpers_1.getObjectEntries)(__1.remoteConfig._getCached().shape);
    var remoteConfigKeysWithTypes = entries.map(function (_a) {
        var key = _a[0], value = _a[1];
        return ({
            key: key,
            type: value._def.typeName
        });
    });
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
