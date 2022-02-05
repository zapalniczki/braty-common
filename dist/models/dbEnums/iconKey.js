"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var iconKey = (0, zod_1.enum)([
    'PKiN',
    'HEART_2022',
    'DOUBLE_HEART',
    'ARROW_BELOW',
    'CHRISTMAS_TREE_STRIPES',
    'CHRISTMAS_TREE_STAR',
    'CHRISTMAS_TREE_PATTERN',
    'BALLOONS',
    'FIREWORKS',
    'SANTA_FACE',
    'CHRISTMAS_TREE',
    'SHIP',
    'WARSAW_MERMAID',
    'BOAT',
    'HEART'
]);
exports.default = iconKey;
