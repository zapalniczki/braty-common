"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var collection_1 = __importDefault(require("../dbModels/collection"));
var unicode = (0, zod_1.array)((0, zod_1.number)());
var brochureIcon = (0, zod_1.object)({
    level: (0, zod_1.enum)(['ICON']),
    label: (0, zod_1.string)(),
    label_unicode: unicode,
    pngPath: (0, zod_1.string)(),
    name: (0, zod_1.string)(),
    name_unicode: unicode,
    link: (0, zod_1.string)()
});
var brochureLabel = (0, zod_1.object)({
    level: (0, zod_1.enum)(['LABEL']),
    label: (0, zod_1.string)(),
    label_unicode: unicode,
    icons: (0, zod_1.array)(brochureIcon)
});
var brochureCollection = collection_1.default
    .pick({
    is_featured: true
})
    .extend({
    level: (0, zod_1.enum)(['COLLECTION']),
    label: (0, zod_1.string)(),
    label_unicode: unicode,
    labels: (0, zod_1.array)(brochureLabel)
});
var brochureData = (0, zod_1.array)(brochureCollection);
exports.default = brochureData;
