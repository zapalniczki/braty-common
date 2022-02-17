import { TypeOf } from 'zod';
declare const language: import("zod").ZodEnum<["pl", "en"]>;
export declare type Language = TypeOf<typeof language>;
export default language;
