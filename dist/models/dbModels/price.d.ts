import { TypeOf } from 'zod';
declare const price: import("zod").ZodObject<{
    price_pl: import("zod").ZodString;
    price_en: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    price_pl: string;
    price_en: string;
}, {
    price_pl: string;
    price_en: string;
}>;
export declare type Price = TypeOf<typeof price>;
export default price;
