import { TypeOf } from 'zod';
declare const deliveryType: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    label_pl: import("zod").ZodString;
    label_en: import("zod").ZodString;
}>, {
    frontend_icon_name: import("zod").ZodString;
    is_enabled: import("zod").ZodBoolean;
    price: import("zod").ZodNumber;
    requires_address: import("zod").ZodBoolean;
    description_pl: import("zod").ZodString;
    description_en: import("zod").ZodString;
    allows_cash_payment: import("zod").ZodBoolean;
}>, "strip", import("zod").ZodTypeAny, {
    created_at: string;
    id: string;
    updated_at: string;
    description_pl: string;
    description_en: string;
    price: number;
    label_pl: string;
    label_en: string;
    frontend_icon_name: string;
    is_enabled: boolean;
    requires_address: boolean;
    allows_cash_payment: boolean;
}, {
    created_at: string;
    id: string;
    updated_at: string;
    description_pl: string;
    description_en: string;
    price: number;
    label_pl: string;
    label_en: string;
    frontend_icon_name: string;
    is_enabled: boolean;
    requires_address: boolean;
    allows_cash_payment: boolean;
}>;
export declare type DeliveryType = TypeOf<typeof deliveryType>;
export default deliveryType;
