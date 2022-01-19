declare const international: import("zod").ZodObject<{
    label_pl: import("zod").ZodString;
    label_en: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    label_pl: string;
    label_en: string;
}, {
    label_pl: string;
    label_en: string;
}>;
export default international;
