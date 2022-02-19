"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var timestamps_1 = __importDefault(require("./timestamps"));
var __1 = require("..");
var international_1 = __importDefault(require("./international"));
var icon = timestamps_1.default.merge(international_1.default).extend({
    visible: (0, zod_1.boolean)(),
    key: __1.iconKey
});
exports.default = icon;
