"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var iconName = (0, zod_1.enum)([
    'question',
    'exchange-alt',
    'question',
    'truck',
    'box-open'
]);
exports.default = iconName;
