"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MOLD_STATUSES = void 0;
var zod_1 = require("zod");
var moldStatus = (0, zod_1.enum)(['IN_PROGRESS', 'DONE', 'UNDONE']);
exports.MOLD_STATUSES = moldStatus.options;
exports.default = moldStatus;
