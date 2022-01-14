import { TypeOf } from 'zod';
declare const parcel: import("zod").ZodObject<import("zod").extendShape<{
    created_at: import("zod").ZodString;
    id: import("zod").ZodString;
    updated_at: import("zod").ZodString;
}, {
    ref: import("zod").ZodString;
    link: import("zod").ZodString;
}>, "strip", import("zod").ZodTypeAny, {
    id: string;
    created_at: string;
    updated_at: string;
    ref: string;
    link: string;
}, {
    id: string;
    created_at: string;
    updated_at: string;
    ref: string;
    link: string;
}>;
export declare type Parcel = TypeOf<typeof parcel>;
export default parcel;
