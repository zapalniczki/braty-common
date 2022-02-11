import { TypeOf } from 'zod';
declare const product: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    price_pl: import("zod").ZodNumber;
    price_en: import("zod").ZodNumber;
}>, {
    mold_id: import("zod").ZodString;
    label_id: import("zod").ZodString;
    icon_id: import("zod").ZodString;
    description_pl: import("zod").ZodString;
    description_en: import("zod").ZodString;
    collection_id: import("zod").ZodString;
    bestseller: import("zod").ZodBoolean;
    visible: import("zod").ZodBoolean;
    featured: import("zod").ZodBoolean;
    name_pl: import("zod").ZodString;
    name_en: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    description_pl: string;
    description_en: string;
    name_pl: string;
    name_en: string;
    created_at: string;
    id: string;
    updated_at: string;
    price_pl: number;
    price_en: number;
    mold_id: string;
    label_id: string;
    icon_id: string;
    collection_id: string;
    bestseller: boolean;
    visible: boolean;
    featured: boolean;
}, {
    description_pl: string;
    description_en: string;
    name_pl: string;
    name_en: string;
    created_at: string;
    id: string;
    updated_at: string;
    price_pl: number;
    price_en: number;
    mold_id: string;
    label_id: string;
    icon_id: string;
    collection_id: string;
    bestseller: boolean;
    visible: boolean;
    featured: boolean;
}>;
export declare type Product = TypeOf<typeof product>;
export default product;
