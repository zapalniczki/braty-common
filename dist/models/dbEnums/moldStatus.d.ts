import { TypeOf } from 'zod';
declare const moldStatus: import("zod").ZodEnum<["IN_PROGRESS", "DONE", "UNDONE"]>;
export declare const MOLD_STATUSES: ["IN_PROGRESS", "DONE", "UNDONE"];
export declare type MoldStatus = TypeOf<typeof moldStatus>;
export default moldStatus;
