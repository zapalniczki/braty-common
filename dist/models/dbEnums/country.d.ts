import { TypeOf } from 'zod';
declare const country: import("zod").ZodEnum<["POLAND", "UNITED KINGDOM", "GERMANY"]>;
export declare type Country = TypeOf<typeof country>;
export default country;
