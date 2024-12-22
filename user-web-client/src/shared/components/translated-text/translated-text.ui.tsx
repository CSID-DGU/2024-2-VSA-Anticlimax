'use client';

import { ReactElement, ReactNode, useEffect, useState } from 'react';

import { useLanguage } from '@/shared/contexts/LanguageContext';

interface TranslatedTextProps {
    text: string | ReactElement | ReactNode;
}

export const TranslatedText = ({ text }: TranslatedTextProps) => {
    const { currentLang, translate } = useLanguage();
    const [translatedText, setTranslatedText] = useState(text);

    useEffect(() => {
        if (typeof text !== 'string') return;

        const translateText = async () => {
            const result = await translate(text);
            setTranslatedText(result);
        };

        translateText();
    }, [text, currentLang, translate]);

    if (typeof text !== 'string') {
        return text;
    }

    return <span>{translatedText}</span>;
};
