import { TypeOf } from 'zod';
declare const deliveryType: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    id: import("zod").ZodString;
}>, {
    label_pl: import("zod").ZodString;
    label_en: import("zod").ZodString;
}>, {
    price_pl: import("zod").ZodNumber;
    price_en: import("zod").ZodNumber;
}>, {
    icon_name: import("zod").ZodEnum<["question", "exchange-alt", "question", "truck", "box-open"]>;
    is_enabled: import("zod").ZodBoolean;
    requires_address: import("zod").ZodBoolean;
    description_pl: import("zod").ZodString;
    description_en: import("zod").ZodString;
    cash_payment: import("zod").ZodNullable<import("zod").ZodBoolean>;
    domestic: import("zod").ZodBoolean;
    abroad: import("zod").ZodBoolean;
}>, "strip", import("zod").ZodTypeAny, {
    description_pl: string;
    description_en: string;
    label_pl: string;
    label_en: string;
    created_at: string;
    updated_at: string;
    id: string;
    price_pl: number;
    price_en: number;
    icon_name: "question" | "exchange-alt" | "truck" | "box-open";
    is_enabled: boolean;
    requires_address: boolean;
    cash_payment: boolean | null;
    domestic: boolean;
    abroad: boolean;
}, {
    description_pl: string;
    description_en: string;
    label_pl: string;
    label_en: string;
    created_at: string;
    updated_at: string;
    id: string;
    price_pl: number;
    price_en: number;
    icon_name: "question" | "exchange-alt" | "truck" | "box-open";
    is_enabled: boolean;
    requires_address: boolean;
    cash_payment: boolean | null;
    domestic: boolean;
    abroad: boolean;
}>;
export declare type DeliveryType = TypeOf<typeof deliveryType>;
export default deliveryType;
