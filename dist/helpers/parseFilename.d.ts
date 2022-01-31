import { ImageSize } from '..';
declare function parseFilename(filename: string): Return;
declare type Return = {
    collection?: string;
    icon?: string;
    label?: string;
    size?: ImageSize;
    extension?: string;
};
export default parseFilename;
