import { TypeOf } from 'zod';
declare const voucher: import("zod").ZodObject<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    discount_pl: import("zod").ZodNumber;
    discount_en: import("zod").ZodNumber;
    is_fixed: import("zod").ZodBoolean;
    is_used: import("zod").ZodBoolean;
}>, "strip", import("zod").ZodTypeAny, {
    created_at: string;
    id: string;
    updated_at: string;
    discount_pl: number;
    discount_en: number;
    is_fixed: boolean;
    is_used: boolean;
}, {
    created_at: string;
    id: string;
    updated_at: string;
    discount_pl: number;
    discount_en: number;
    is_fixed: boolean;
    is_used: boolean;
}>;
export declare type Voucher = TypeOf<typeof voucher>;
export default voucher;
