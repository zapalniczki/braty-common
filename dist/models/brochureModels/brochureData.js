"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var icon_1 = __importDefault(require("../dbModels/icon"));
var brochureIcon = icon_1.default
    .pick({
    id: true,
    label_pl: true,
    label_en: true,
    created_at: true,
    updated_at: true,
    visible: true
})
    .extend({
    level: (0, zod_1.enum)(['ICON']),
    label_pl_unicode: (0, zod_1.array)((0, zod_1.number)()),
    pngPath: (0, zod_1.string)(),
    name_pl: (0, zod_1.string)(),
    name_pl_unicode: (0, zod_1.array)((0, zod_1.number)()),
    link: (0, zod_1.string)()
});
var brochureLabel = (0, zod_1.object)({
    level: (0, zod_1.enum)(['LABEL']),
    id: (0, zod_1.string)().uuid(),
    label_pl: (0, zod_1.string)(),
    label_pl_unicode: (0, zod_1.array)((0, zod_1.number)()),
    icons: (0, zod_1.array)(brochureIcon)
});
var brochureCollection = (0, zod_1.object)({
    level: (0, zod_1.enum)(['COLLECTION']),
    id: (0, zod_1.string)().uuid(),
    is_featured: (0, zod_1.boolean)(),
    label_pl: (0, zod_1.string)(),
    label_pl_unicode: (0, zod_1.array)((0, zod_1.number)()),
    labels: (0, zod_1.array)(brochureLabel)
});
var brochureData = (0, zod_1.array)(brochureCollection);
exports.default = brochureData;
