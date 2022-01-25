import { Language } from '..';
declare type Props = {
    language: Language;
} & ({
    description?: false;
    label: Name;
    name: true;
} | {
    description: true;
    label: Description;
    name?: false;
} | {
    description?: false;
    label: Label;
    name?: false;
});
declare function getLanguageLabel(props: Props): string;
export default getLanguageLabel;
declare type Label = {
    label_en: string;
    label_pl: string;
};
declare type Description = {
    description_en: string;
    description_pl: string;
};
declare type Name = {
    name_en: string;
    name_pl: string;
};
