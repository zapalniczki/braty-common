import { TypeOf } from 'zod';
declare const image: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    id: import("zod").ZodString;
}>, {
    src: import("zod").ZodString;
    size: import("zod").ZodEnum<["TILE", "LARGE", "TILE_REVERSE", "THUMBNAIL", "BASKET", "LONG"]>;
    product_id: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    size: "TILE" | "LARGE" | "TILE_REVERSE" | "THUMBNAIL" | "BASKET" | "LONG";
    created_at: string;
    updated_at: string;
    id: string;
    src: string;
    product_id: string;
}, {
    size: "TILE" | "LARGE" | "TILE_REVERSE" | "THUMBNAIL" | "BASKET" | "LONG";
    created_at: string;
    updated_at: string;
    id: string;
    src: string;
    product_id: string;
}>;
export declare type Image = TypeOf<typeof image>;
export default image;
