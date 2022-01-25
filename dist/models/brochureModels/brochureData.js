"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var collection_1 = __importDefault(require("../dbModels/collection"));
var label = (0, zod_1.array)((0, zod_1.number)());
var brochureIcon = (0, zod_1.object)({
    level: (0, zod_1.enum)(['ICON']),
    label: label,
    pngPath: (0, zod_1.string)(),
    name: label,
    link: (0, zod_1.string)()
});
var brochureLabel = (0, zod_1.object)({
    level: (0, zod_1.enum)(['LABEL']),
    label: label,
    icons: (0, zod_1.array)(brochureIcon)
});
var brochureCollection = collection_1.default
    .pick({
    is_featured: true
})
    .extend({
    level: (0, zod_1.enum)(['COLLECTION']),
    label: label,
    labels: (0, zod_1.array)(brochureLabel)
});
var brochureData = (0, zod_1.array)(brochureCollection);
exports.default = brochureData;
