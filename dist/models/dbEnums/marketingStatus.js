"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marketingStatus = void 0;
var zod_1 = require("zod");
exports.marketingStatus = (0, zod_1.enum)([
    'TODO',
    'UNANSWERED',
    'INTERESTED',
    'REJECTED'
]);
exports.default = exports.marketingStatus;
