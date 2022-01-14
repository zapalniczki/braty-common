"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getViewOrderLink = exports.getViewProductLink = void 0;
var routes_1 = __importDefault(require("./routes"));
var constants_1 = require("../constants");
var index_1 = require("./index");
var getViewProductLink = function (productId) {
    return "".concat(index_1.WEBISTE_URL).concat(index_1.BROWSER_ROUTER_SUFFIX).concat(routes_1.default.PRODUCTS).concat(constants_1.SEPARATORS.PATH).concat(productId);
};
exports.getViewProductLink = getViewProductLink;
var getViewOrderLink = function (orderId) {
    return "".concat(index_1.WEBISTE_URL).concat(index_1.BROWSER_ROUTER_SUFFIX).concat(routes_1.default.ORDERS).concat(constants_1.SEPARATORS.PATH).concat(orderId);
};
exports.getViewOrderLink = getViewOrderLink;
