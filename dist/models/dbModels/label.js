"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tableBase_1 = __importDefault(require("./tableBase"));
var international_1 = __importDefault(require("./international"));
var label = tableBase_1.default.merge(international_1.default);
exports.default = label;
