import { TypeOf } from 'zod';
declare const orderStatus: import("zod").ZodEnum<["OPEN", "CONFIRMED", "PAYMENT_RECEIVED", "PRODUCTION", "AWAITING_FOR_PICKUP", "IN_DELIVERY", "COMPLETED", "REJECTED"]>;
export declare type OrderStatus = TypeOf<typeof orderStatus>;
export declare const ORDER_STATUSES: ["OPEN", "CONFIRMED", "PAYMENT_RECEIVED", "PRODUCTION", "AWAITING_FOR_PICKUP", "IN_DELIVERY", "COMPLETED", "REJECTED"];
export default orderStatus;
