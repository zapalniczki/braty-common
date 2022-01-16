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
    created_at: string;
    id: string;
    updated_at: string;
    visible: boolean;
    label_pl: string;
    label_en: string;
}, {
    created_at: string;
    id: string;
    updated_at: string;
    visible: boolean;
    label_pl: string;
    label_en: string;
}>;
export declare type Icon = TypeOf<typeof icon>;
export default icon;
