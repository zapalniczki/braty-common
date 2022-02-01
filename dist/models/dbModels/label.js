"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var __1 = require("..");
var international_1 = __importDefault(require("./international"));
var tableBase_1 = __importDefault(require("./tableBase"));
var label = tableBase_1.default.merge(international_1.default).extend({
    collection_id: (0, zod_1.string)().uuid(),
    icons: (0, zod_1.array)(__1.iconKey)
});
exports.default = label;
