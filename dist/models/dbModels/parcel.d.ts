import { TypeOf } from 'zod';
declare const parcel: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    id: import("zod").ZodString;
}>, {
    ref: import("zod").ZodString;
    link: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    created_at: string;
    updated_at: string;
    id: string;
    link: string;
    ref: string;
}, {
    created_at: string;
    updated_at: string;
    id: string;
    link: string;
    ref: string;
}>;
export declare type Parcel = TypeOf<typeof parcel>;
export default parcel;
