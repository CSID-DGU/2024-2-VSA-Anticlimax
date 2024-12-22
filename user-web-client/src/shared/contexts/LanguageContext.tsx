'use client';

import React, { createContext, useContext, useState } from 'react';

import { translateText } from '../utils/translate';

interface LanguageContextType {
    currentLang: 'KOR' | 'ENG';
    toggleLanguage: () => void;
    translate: (text: string) => Promise<string>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined,
);

export const LanguageProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [currentLang, setCurrentLang] = useState<'KOR' | 'ENG'>('KOR');

    const toggleLanguage = () => {
        const newLang = currentLang === 'KOR' ? 'ENG' : 'KOR';
        setCurrentLang(newLang);
    };

    const translate = async (text: string) => {
        if (currentLang === 'KOR') return text;

        // 특정 단어에 대한 직접 번역 매핑
        const directTranslations: Record<string, string> = {
            영양제: 'Vitamin',
            의약품: 'Medicine',
            댓글: 'Comments',
            개: 'items',
            점: 'points',
            다운로드: 'Download',
            제출하기: 'Submit',
            '우아한 제휴 문의': 'Partnership Inquiry',
            '개인 정보 수집 동의': 'Privacy Agreement',
            '네, 동의합니다!': 'Yes, I agree!',
            '앱 다운로드': 'Download',
            '담당자 성함': 'Contact Name',
            연락처: 'Contact Info',
            '메일 주소': 'Email Address',
            '문의 내용': 'Inquiry Content',
            '담당자님 성함을 입력해주세요': 'Enter contact name',
            '연락처를 입력해주세요': 'Enter contact info',
            '메일주소를 입력해주세요': 'Enter email address',
            '내용을 입력해주세요': 'Enter your message',
            '약 정보': 'Drug Information',
            '이 약은요': 'About this drug',
            유통기한: 'Expiration Date',
            '보관 방법': 'Storage Method',
            '복용 방법': 'Dosage',
            '이 점을 유의하세요': 'Precautions',
            '이런 효과를 가져요': 'Effects',
            '이렇게 복용하세요': 'How to take',
            '주요 기능': 'Main Functions',
            '우아한 다운로드': 'Download',
            정렬: 'Sort',
            인기순: 'Popular',
            최신순: 'Latest',
        };

        if (directTranslations[text]) {
            return directTranslations[text];
        }
        return await translateText(text);
    };

    return (
        <LanguageContext.Provider
            value={{ currentLang, toggleLanguage, translate }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
