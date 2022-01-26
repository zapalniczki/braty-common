"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tableBase_1 = __importDefault(require("./tableBase"));
var zod_1 = require("zod");
var international_1 = __importDefault(require("./international"));
var iconName_1 = __importDefault(require("./iconName"));
var paymentType = tableBase_1.default.merge(international_1.default).extend({
    abroad: (0, zod_1.boolean)(),
    description_en: (0, zod_1.string)(),
    description_pl: (0, zod_1.string)(),
    domestic: (0, zod_1.boolean)(),
    icon_name: iconName_1.default,
    in_person: (0, zod_1.boolean)(),
    is_enabled: (0, zod_1.boolean)(),
    price: (0, zod_1.number)()
});
exports.default = paymentType;
