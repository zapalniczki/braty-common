"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var icon_1 = __importDefault(require("../dbModels/icon"));
var collection_1 = __importDefault(require("../dbModels/collection"));
var label_1 = __importDefault(require("../dbModels/label"));
var brochureIcon = icon_1.default.extend({
    level: (0, zod_1.enum)(['ICON']),
    label_pl_unicode: (0, zod_1.array)((0, zod_1.number)()),
    pngPath: (0, zod_1.string)(),
    name_pl: (0, zod_1.string)(),
    name_pl_unicode: (0, zod_1.array)((0, zod_1.number)()),
    link: (0, zod_1.string)()
});
var brochureLabel = label_1.default.extend({
    level: (0, zod_1.enum)(['LABEL']),
    label_pl_unicode: (0, zod_1.array)((0, zod_1.number)()),
    icons: (0, zod_1.array)(brochureIcon)
});
var brochureCollection = collection_1.default.extend({
    level: (0, zod_1.enum)(['COLLECTION']),
    label_pl_unicode: (0, zod_1.array)((0, zod_1.number)()),
    labels: (0, zod_1.array)(brochureLabel)
});
var brochureData = (0, zod_1.array)(brochureCollection);
exports.default = brochureData;
