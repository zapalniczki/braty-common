"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var tableBase_1 = __importDefault(require("./tableBase"));
var user = tableBase_1.default.extend({
    email: (0, zod_1.string)().email()
});
exports.default = user;
