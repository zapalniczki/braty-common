"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var timestamps_1 = __importDefault(require("./timestamps"));
var __1 = require("..");
var collection_1 = __importDefault(require("./collection"));
var label = timestamps_1.default.extend({
    collection_key: collection_1.default.shape.key,
    key: (0, zod_1.string)(),
    icons: (0, zod_1.array)(__1.iconKey)
});
exports.default = label;
