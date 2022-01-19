"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tableBase_1 = __importDefault(require("./tableBase"));
var international_1 = __importDefault(require("./international"));
var zod_1 = require("zod");
var collection = tableBase_1.default.merge(international_1.default).extend({
    visible: (0, zod_1.boolean)(),
    is_featured: (0, zod_1.boolean)()
});
exports.default = collection;
