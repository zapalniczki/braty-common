import { TypeOf } from 'zod';
declare const product: import("zod").ZodObject<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    mold_id: import("zod").ZodString;
    label_id: import("zod").ZodString;
    icon_id: import("zod").ZodString;
    description_pl: import("zod").ZodString;
    description_en: import("zod").ZodString;
    price: import("zod").ZodNumber;
    collection_id: import("zod").ZodString;
    bestseller: import("zod").ZodBoolean;
    visible: import("zod").ZodBoolean;
    featured: import("zod").ZodBoolean;
    name: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    id: string;
    created_at: string;
    updated_at: string;
    visible: boolean;
    price: number;
    name: string;
    label_id: string;
    icon_id: string;
    mold_id: string;
    description_pl: string;
    description_en: string;
    collection_id: string;
    bestseller: boolean;
    featured: boolean;
}, {
    id: string;
    created_at: string;
    updated_at: string;
    visible: boolean;
    price: number;
    name: string;
    label_id: string;
    icon_id: string;
    mold_id: string;
    description_pl: string;
    description_en: string;
    collection_id: string;
    bestseller: boolean;
    featured: boolean;
}>;
export declare type Product = TypeOf<typeof product>;
export default product;
