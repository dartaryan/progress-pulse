export enum LanguageCodes {
    English = 'en', Hebrew = 'he', Russian = 'ru', German = 'de'
}

export interface Language {
    code: LanguageCodes;
    name: string;
}

export const English: Language = {
    code: LanguageCodes.English,
    name: 'English'
}

export const Hebrew: Language = {
    code: LanguageCodes.Hebrew,
    name: 'Hebrew'
}

export const Russian: Language = {
    code: LanguageCodes.Russian,
    name: 'Russian'
}

export const German: Language = {
    code: LanguageCodes.German,
    name: 'German'
}

export const availableLanguages: Language[] = [English, Hebrew, Russian, German];
