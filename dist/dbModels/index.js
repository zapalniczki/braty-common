"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.voucher = exports.user = exports.parcel = exports.order = exports.image = exports.tableBase = void 0;
var tableBase_1 = require("./tableBase");
Object.defineProperty(exports, "tableBase", { enumerable: true, get: function () { return __importDefault(tableBase_1).default; } });
var image_1 = require("./image");
Object.defineProperty(exports, "image", { enumerable: true, get: function () { return __importDefault(image_1).default; } });
__exportStar(require("./image"), exports);
var order_1 = require("./order");
Object.defineProperty(exports, "order", { enumerable: true, get: function () { return __importDefault(order_1).default; } });
__exportStar(require("./order"), exports);
var parcel_1 = require("./parcel");
Object.defineProperty(exports, "parcel", { enumerable: true, get: function () { return __importDefault(parcel_1).default; } });
__exportStar(require("./parcel"), exports);
var user_1 = require("./user");
Object.defineProperty(exports, "user", { enumerable: true, get: function () { return __importDefault(user_1).default; } });
__exportStar(require("./user"), exports);
var voucher_1 = require("./voucher");
Object.defineProperty(exports, "voucher", { enumerable: true, get: function () { return __importDefault(voucher_1).default; } });
__exportStar(require("./voucher"), exports);
