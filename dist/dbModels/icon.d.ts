import { TypeOf } from 'zod';
declare const icon: import("zod").ZodObject<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    label_pl: import("zod").ZodString;
    label_en: import("zod").ZodString;
    visible: import("zod").ZodBoolean;
}>, "strip", import("zod").ZodTypeAny, {
    id: string;
    label_pl: string;
    created_at: string;
    updated_at: string;
    label_en: string;
    visible: boolean;
}, {
    id: string;
    label_pl: string;
    created_at: string;
    updated_at: string;
    label_en: string;
    visible: boolean;
}>;
export declare type Icon = TypeOf<typeof icon>;
export default icon;
