"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
function parseFilename(filename) {
    var _a = filename.split(__1.SEPARATORS.DOT), rest = _a[0], extension = _a[1];
    var parts = rest.split(__1.SEPARATORS.FILENAME);
    var keys = [];
    for (var index = 0; index < parts.length; index++) {
        var part = parts[index];
        var partParts = part.split(__1.SEPARATORS.FILENAME_PAIR);
        var partObject = {
            key: partParts[0],
            value: partParts[1]
        };
        keys.push(partObject);
    }
    var collection;
    var icon;
    var label;
    var size;
    for (var index = 0; index < keys.length; index++) {
        var key = keys[index];
        if (key.key === 'collection') {
            collection = key.value;
        }
        else if (key.key === 'label') {
            label = key.value;
        }
        else if (key.key === 'icon') {
            icon = key.value;
        }
        else if (key.key === 'size') {
            size = key.value;
        }
    }
    return {
        collection: collection,
        icon: icon,
        label: label,
        size: size,
        extension: extension
    };
}
exports.default = parseFilename;
