"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageSize = void 0;
var zod_1 = require("zod");
exports.imageSize = (0, zod_1.enum)([
    'TILE',
    'LARGE',
    'TILE_REVERSE',
    'THUMBNAIL',
    'BASKET',
    'LONG'
]);
exports.default = exports.imageSize;
