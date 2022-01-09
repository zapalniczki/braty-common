"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const brochureIcon = (0, zod_1.object)({
    level: (0, zod_1.enum)(['ICON']),
    id: (0, zod_1.string)().uuid(),
    label_pl: (0, zod_1.string)(),
    label_pl_uniconde: (0, zod_1.array)((0, zod_1.number)()),
    pngPath: (0, zod_1.string)(),
    name_pl: (0, zod_1.string)()
});
const brochureLabel = (0, zod_1.object)({
    level: (0, zod_1.enum)(['LABEL']),
    id: (0, zod_1.string)().uuid(),
    label_pl: (0, zod_1.string)(),
    label_pl_uniconde: (0, zod_1.array)((0, zod_1.number)()),
    icons: (0, zod_1.array)(brochureIcon)
});
const brochureCollection = (0, zod_1.object)({
    level: (0, zod_1.enum)(['COLLECTION']),
    id: (0, zod_1.string)().uuid(),
    label_pl: (0, zod_1.string)(),
    label_pl_uniconde: (0, zod_1.array)((0, zod_1.number)()),
    labels: (0, zod_1.array)(brochureLabel)
});
const brochureData = (0, zod_1.array)(brochureCollection);
exports.default = brochureData;
