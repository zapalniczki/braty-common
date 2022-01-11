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
exports.ROUTES = exports.BROWSER_ROUTER_SUFFIX = exports.WEBISTE_URL = void 0;
exports.WEBISTE_URL = 'https://braty.co';
exports.BROWSER_ROUTER_SUFFIX = '/#';
var ROUTES_1 = require("./ROUTES");
Object.defineProperty(exports, "ROUTES", { enumerable: true, get: function () { return __importDefault(ROUTES_1).default; } });
__exportStar(require("./links"), exports);
