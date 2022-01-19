import { TypeOf } from 'zod';
declare const paymentType: import("zod").ZodObject<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    label: import("zod").ZodString;
    price: import("zod").ZodNumber;
    time: import("zod").ZodString;
    frontend_icon_name: import("zod").ZodString;
    is_enabled: import("zod").ZodBoolean;
    in_person: import("zod").ZodBoolean;
}>, "strip", import("zod").ZodTypeAny, {
    created_at: string;
    id: string;
    updated_at: string;
    price: number;
    frontend_icon_name: string;
    is_enabled: boolean;
    time: string;
    label: string;
    in_person: boolean;
}, {
    created_at: string;
    id: string;
    updated_at: string;
    price: number;
    frontend_icon_name: string;
    is_enabled: boolean;
    time: string;
    label: string;
    in_person: boolean;
}>;
export declare type PaymentType = TypeOf<typeof paymentType>;
export default paymentType;
