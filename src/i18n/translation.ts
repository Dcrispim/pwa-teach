import { getTranslations as _getTranslations } from "next-intl/server";
import { useTranslations as _useTranslations } from 'next-intl';

export const getTranslations = async (page: string) => {
    const t = await _getTranslations(page);
    return (...keys: string[]) => {
        const key = keys.join('');
        const parts = key.split('. ')
        const translatedParts = parts.map(p => {
            const translated = t(p.trim())
            const cleaned = translated.startsWith(`${page}.`)
                ? translated.slice(page.length + 1)
                : translated;
            return cleaned
        });
        const translated = translatedParts.join('. ');


        return translated || key;

    };
};

export const useTranslations = (page='default') => {
    const t = _useTranslations(page);

    return (...keys: string[]) => {
        const key = keys.join('');
        const parts = key.split('. ');
        const translatedParts = parts.map((p) => {
            const translated = t(p.trim());
            const cleaned = translated.startsWith(`${page}.`)
                ? translated.slice(page.length + 1)
                : translated;
            return cleaned;
        });
        const translated = translatedParts.join('. ');

        return translated || key;
    };
};

export const getI18n = async () => await getTranslations('default');

