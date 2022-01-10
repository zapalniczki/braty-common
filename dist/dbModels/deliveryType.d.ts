import { TypeOf } from 'zod';
declare const deliveryType: import("zod").ZodObject<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    frontend_icon_name: import("zod").ZodString;
    is_enabled: import("zod").ZodBoolean;
    label: import("zod").ZodString;
    price: import("zod").ZodNumber;
    requires_address: import("zod").ZodBoolean;
    time: import("zod").ZodString;
    allows_cash_payment: import("zod").ZodBoolean;
}>, "strip", import("zod").ZodTypeAny, {
    id: string;
    created_at: string;
    updated_at: string;
    frontend_icon_name: string;
    is_enabled: boolean;
    label: string;
    price: number;
    requires_address: boolean;
    time: string;
    allows_cash_payment: boolean;
}, {
    id: string;
    created_at: string;
    updated_at: string;
    frontend_icon_name: string;
    is_enabled: boolean;
    label: string;
    price: number;
    requires_address: boolean;
    time: string;
    allows_cash_payment: boolean;
}>;
export declare type DeliveryType = TypeOf<typeof deliveryType>;
export default deliveryType;
