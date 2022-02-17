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
exports.remoteConfig = exports.language = void 0;
__exportStar(require("./language"), exports);
__exportStar(require("./remoteConfig"), exports);
var language_1 = require("./language");
Object.defineProperty(exports, "language", { enumerable: true, get: function () { return __importDefault(language_1).default; } });
var remoteConfig_1 = require("./remoteConfig");
Object.defineProperty(exports, "remoteConfig", { enumerable: true, get: function () { return __importDefault(remoteConfig_1).default; } });
