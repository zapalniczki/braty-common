import { TypeOf } from 'zod';
export declare const marketingStatus: import("zod").ZodEnum<["TODO", "UNANSWERED", "INTERESTED", "REJECTED"]>;
export declare type MarketingStatus = TypeOf<typeof marketingStatus>;
export default marketingStatus;
