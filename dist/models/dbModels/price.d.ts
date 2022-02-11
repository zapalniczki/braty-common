import { TypeOf } from 'zod';
declare const price: import("zod").ZodObject<{
    price_pl: import("zod").ZodNumber;
    price_en: import("zod").ZodNumber;
}, "strip", import("zod").ZodTypeAny, {
    price_pl: number;
    price_en: number;
}, {
    price_pl: number;
    price_en: number;
}>;
export declare type Price = TypeOf<typeof price>;
export default price;
