"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var brochureIcon = (0, zod_1.object)({
    level: (0, zod_1.enum)(['ICON']),
    id: (0, zod_1.string)().uuid(),
    label_pl: (0, zod_1.string)(),
    label_pl_unicode: (0, zod_1.array)((0, zod_1.number)()),
    pngPath: (0, zod_1.string)(),
    name_pl: (0, zod_1.string)(),
    name_pl_unicode: (0, zod_1.array)((0, zod_1.number)())
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
    label_pl: (0, zod_1.string)(),
    label_pl_unicode: (0, zod_1.array)((0, zod_1.number)()),
    labels: (0, zod_1.array)(brochureLabel)
});
var brochureData = (0, zod_1.array)(brochureCollection);
exports.default = brochureData;
