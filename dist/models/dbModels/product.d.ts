import { TypeOf } from 'zod';
declare const product: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    id: import("zod").ZodString;
}>, {
    price_pl: import("zod").ZodNumber;
    price_en: import("zod").ZodNumber;
}>, {
    bestseller: import("zod").ZodBoolean;
    collection_key: import("zod").ZodString;
    description_en: import("zod").ZodString;
    description_pl: import("zod").ZodString;
    featured: import("zod").ZodBoolean;
    icon_key: import("zod").ZodEnum<["PKiN", "HEART_2022", "DOUBLE_HEART", "ARROW_BELOW", "CHRISTMAS_TREE_STRIPES", "CHRISTMAS_TREE_STAR", "CHRISTMAS_TREE_PATTERN", "BALLOONS", "FIREWORKS", "SANTA_FACE", "CHRISTMAS_TREE", "SHIP", "WARSAW_MERMAID", "BOAT", "HEART"]>;
    label_key: import("zod").ZodString;
    mold_id: import("zod").ZodString;
    name_en: import("zod").ZodString;
    name_pl: import("zod").ZodString;
    visible: import("zod").ZodBoolean;
}>, "strip", import("zod").ZodTypeAny, {
    description_pl: string;
    description_en: string;
    name_pl: string;
    name_en: string;
    created_at: string;
    updated_at: string;
    id: string;
    price_pl: number;
    price_en: number;
    bestseller: boolean;
    visible: boolean;
    collection_key: string;
    featured: boolean;
    icon_key: "PKiN" | "HEART_2022" | "DOUBLE_HEART" | "ARROW_BELOW" | "CHRISTMAS_TREE_STRIPES" | "CHRISTMAS_TREE_STAR" | "CHRISTMAS_TREE_PATTERN" | "BALLOONS" | "FIREWORKS" | "SANTA_FACE" | "CHRISTMAS_TREE" | "SHIP" | "WARSAW_MERMAID" | "BOAT" | "HEART";
    label_key: string;
    mold_id: string;
}, {
    description_pl: string;
    description_en: string;
    name_pl: string;
    name_en: string;
    created_at: string;
    updated_at: string;
    id: string;
    price_pl: number;
    price_en: number;
    bestseller: boolean;
    visible: boolean;
    collection_key: string;
    featured: boolean;
    icon_key: "PKiN" | "HEART_2022" | "DOUBLE_HEART" | "ARROW_BELOW" | "CHRISTMAS_TREE_STRIPES" | "CHRISTMAS_TREE_STAR" | "CHRISTMAS_TREE_PATTERN" | "BALLOONS" | "FIREWORKS" | "SANTA_FACE" | "CHRISTMAS_TREE" | "SHIP" | "WARSAW_MERMAID" | "BOAT" | "HEART";
    label_key: string;
    mold_id: string;
}>;
export declare type Product = TypeOf<typeof product>;
export default product;
