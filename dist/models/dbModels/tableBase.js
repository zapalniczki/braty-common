"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var timestamps_1 = __importDefault(require("./timestamps"));
var tableBase = timestamps_1.default.extend({
    id: (0, zod_1.string)().uuid()
});
exports.default = tableBase;
