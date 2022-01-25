import { TypeOf } from 'zod';
declare const paymentType: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    label_pl: import("zod").ZodString;
    label_en: import("zod").ZodString;
}>, {
    price: import("zod").ZodNumber;
    description_pl: import("zod").ZodString;
    description_en: import("zod").ZodString;
    icon_name: import("zod").ZodEnum<["question", "exchange-alt", "question", "truck", "box-open"]>;
    is_enabled: import("zod").ZodBoolean;
    in_person: import("zod").ZodBoolean;
}>, "strip", import("zod").ZodTypeAny, {
    description_pl: string;
    description_en: string;
    label_pl: string;
    label_en: string;
    created_at: string;
    id: string;
    updated_at: string;
    price: number;
    icon_name: "question" | "exchange-alt" | "truck" | "box-open";
    is_enabled: boolean;
    in_person: boolean;
}, {
    description_pl: string;
    description_en: string;
    label_pl: string;
    label_en: string;
    created_at: string;
    id: string;
    updated_at: string;
    price: number;
    icon_name: "question" | "exchange-alt" | "truck" | "box-open";
    is_enabled: boolean;
    in_person: boolean;
}>;
export declare type PaymentType = TypeOf<typeof paymentType>;
export default paymentType;
