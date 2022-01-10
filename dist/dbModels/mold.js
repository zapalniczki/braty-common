"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MOLD_STATUSES = void 0;
const tableBase_1 = __importDefault(require("./tableBase"));
const zod_1 = require("zod");
const status = (0, zod_1.enum)(['IN_PROGRESS', 'DONE', 'UNDONE']);
const mold = tableBase_1.default.extend({
    status: status,
    label_id: (0, zod_1.string)(),
    icon_id: (0, zod_1.string)()
});
exports.MOLD_STATUSES = status.options;
exports.default = mold;
