import { TypeOf } from 'zod';
export declare const imageSize: import("zod").ZodEnum<["TILE", "LARGE", "TILE_REVERSE", "THUMBNAIL", "BASKET", "LONG"]>;
export declare type ImageSize = TypeOf<typeof imageSize>;
export default imageSize;
