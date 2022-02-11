"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var international_1 = __importDefault(require("./international"));
var iconName_1 = __importDefault(require("./iconName"));
var tableBase_1 = __importDefault(require("./tableBase"));
var zod_1 = require("zod");
var _1 = require(".");
var deliveryType = tableBase_1.default.merge(international_1.default).merge(_1.price).extend({
    icon_name: iconName_1.default,
    is_enabled: (0, zod_1.boolean)(),
    requires_address: (0, zod_1.boolean)(),
    description_pl: (0, zod_1.string)(),
    description_en: (0, zod_1.string)(),
    cash_payment: (0, zod_1.boolean)().nullable(),
    domestic: (0, zod_1.boolean)(),
    abroad: (0, zod_1.boolean)()
});
exports.default = deliveryType;
