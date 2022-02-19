"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MOLD_STATUSES = void 0;
var zod_1 = require("zod");
var icon_1 = __importDefault(require("./icon"));
var label_1 = __importDefault(require("./label"));
var tableBase_1 = __importDefault(require("./tableBase"));
var status = (0, zod_1.enum)(['IN_PROGRESS', 'DONE', 'UNDONE']);
var mold = tableBase_1.default.extend({
    status: status,
    label_key: label_1.default.shape.key,
    icon_key: icon_1.default.shape.key
});
exports.MOLD_STATUSES = status.options;
exports.default = mold;
