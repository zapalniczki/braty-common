declare function parseFilename(filename: string): {
    collection: string | undefined;
    icon: string | undefined;
    label: string | undefined;
    size: undefined;
    extension: string;
};
export default parseFilename;
