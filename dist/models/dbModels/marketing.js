"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.marketingStatus = void 0;
var zod_1 = require("zod");
var tableBase_1 = __importDefault(require("./tableBase"));
exports.marketingStatus = (0, zod_1.enum)([
    'TODO',
    'UNANSWERED',
    'INTERESTED',
    'REJECTED'
]);
var marketing = tableBase_1.default.extend({
    email: (0, zod_1.string)().nullable(),
    is_test: (0, zod_1.boolean)(),
    name: (0, zod_1.string)().nullable(),
    notes: (0, zod_1.string)().nullable(),
    phone: (0, zod_1.string)().nullable(),
    plus_code: (0, zod_1.string)().nullable(),
    send_brochure_agreement: (0, zod_1.boolean)(),
    status: exports.marketingStatus
});
exports.default = marketing;
