"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getViewProductLink = void 0;
const index_1 = require("./index");
const routes_1 = __importDefault(require("./routes"));
const constants_1 = require("../constants");
const getViewProductLink = (productId) => `${index_1.WEBISTE_URL}${routes_1.default.viewProduct}${constants_1.SEPARATORS.PATH}${productId}`;
exports.getViewProductLink = getViewProductLink;
