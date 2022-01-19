import { TypeOf } from 'zod';
declare const country: import("zod").ZodEnum<["POLAND", "UNITED KINGDOM", "GERMANY"]>;
export declare type Country = TypeOf<typeof country>;
declare const address: import("zod").ZodObject<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    city: import("zod").ZodString;
    post_code: import("zod").ZodString;
    street_address: import("zod").ZodString;
    country: import("zod").ZodEnum<["POLAND", "UNITED KINGDOM", "GERMANY"]>;
}>, "strip", import("zod").ZodTypeAny, {
    created_at: string;
    id: string;
    updated_at: string;
    city: string;
    post_code: string;
    street_address: string;
    country: "POLAND" | "UNITED KINGDOM" | "GERMANY";
}, {
    created_at: string;
    id: string;
    updated_at: string;
    city: string;
    post_code: string;
    street_address: string;
    country: "POLAND" | "UNITED KINGDOM" | "GERMANY";
}>;
export declare type Address = TypeOf<typeof address>;
export default address;
