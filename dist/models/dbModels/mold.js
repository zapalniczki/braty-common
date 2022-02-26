"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dbEnums_1 = require("../dbEnums");
var icon_1 = __importDefault(require("./icon"));
var label_1 = __importDefault(require("./label"));
var tableBase_1 = __importDefault(require("./tableBase"));
var mold = tableBase_1.default.extend({
    status: dbEnums_1.moldStatus,
    label_key: label_1.default.shape.key,
    icon_key: icon_1.default.shape.key
});
exports.default = mold;
