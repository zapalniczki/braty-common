"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getViewOrderLink = exports.getViewProductLink = void 0;
const routes_1 = __importDefault(require("./routes"));
const constants_1 = require("../constants");
const index_1 = require("./index");
const getViewProductLink = (productId) => `${index_1.WEBISTE_URL}${index_1.BROWSER_ROUTER_SUFFIX}${routes_1.default.PRODUCTS}${constants_1.SEPARATORS.PATH}${productId}`;
exports.getViewProductLink = getViewProductLink;
const getViewOrderLink = (orderId) => `${index_1.WEBISTE_URL}${index_1.BROWSER_ROUTER_SUFFIX}${routes_1.default.ORDERS}${constants_1.SEPARATORS.PATH}${orderId}`;
exports.getViewOrderLink = getViewOrderLink;
