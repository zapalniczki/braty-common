"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var tableBase_1 = __importDefault(require("./tableBase"));
var price_1 = __importDefault(require("./price"));
var orderItem = tableBase_1.default.merge(price_1.default).extend({
    order_id: (0, zod_1.string)().uuid(),
    product_id: (0, zod_1.string)().uuid(),
    quantity: (0, zod_1.number)(),
    is_test: (0, zod_1.boolean)()
});
exports.default = orderItem;
