"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tableBase_1 = __importDefault(require("./tableBase"));
var zod_1 = require("zod");
var parcel = tableBase_1.default.extend({
    ref: (0, zod_1.string)(),
    link: (0, zod_1.string)()
});
exports.default = parcel;
