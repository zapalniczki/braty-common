import { TypeOf } from 'zod';
declare const label: import("zod").ZodObject<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    label_pl: import("zod").ZodString;
    label_en: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    id: string;
    label_pl: string;
    created_at: string;
    updated_at: string;
    label_en: string;
}, {
    id: string;
    label_pl: string;
    created_at: string;
    updated_at: string;
    label_en: string;
}>;
export declare type Label = TypeOf<typeof label>;
export default label;
