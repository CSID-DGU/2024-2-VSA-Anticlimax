import { InputField } from '@shared/components/input-field';
import { TextAreaField } from '@shared/components/textarea-field';
import { TranslatedText } from '@shared/components/translated-text/translated-text.ui';
import { useLanguage } from '@shared/contexts/LanguageContext';
import React, { ChangeEvent, useEffect, useState } from 'react';

interface FormFieldsProps {
    contactName: string;
    contactInfo: string;
    email: string;
    inquiryContent: string;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleTextAreaChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormFields: React.FC<FormFieldsProps> = ({
    contactName,
    contactInfo,
    email,
    inquiryContent,
    handleInputChange,
    handleTextAreaChange,
}) => {
    const { translate, currentLang } = useLanguage();
    const [placeholders, setPlaceholders] = useState({
        name: '담당자님 성함을 입력해주세요',
        contact: '연락처를 입력해주세요',
        email: '메일주소를 입력해주세요',
        content: '내용을 입력해주세요',
    });

    const isEmailValid = email
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        : true;
    const isPhoneValid = contactInfo ? /^[0-9]{11}$/.test(contactInfo) : true;

    useEffect(() => {
        const updatePlaceholders = async () => {
            const [name, contact, email, content] = await Promise.all([
                translate('담당자님 성함을 입력해주세요'),
                translate('연락처를 입력해주세요'),
                translate('메일주소를 입력해주세요'),
                translate('내용을 입력해주세요'),
            ]);
            setPlaceholders({ name, contact, email, content });
        };
        updatePlaceholders();
    }, [currentLang, translate]);

    return (
        <div className="flex flex-col gap-11">
            <InputField
                label={<TranslatedText text="담당자 성함" />}
                name="contactName"
                value={contactName}
                onChange={handleInputChange}
                placeholder={placeholders.name}
                maxLength={32}
            />
            <InputField
                label={<TranslatedText text="연락처" />}
                name="contactInfo"
                type="tel"
                value={contactInfo}
                onChange={handleInputChange}
                placeholder={placeholders.contact}
                maxLength={11}
                pattern="[0-9]{11}"
                error={!isPhoneValid && contactInfo.length > 0}
            />
            <InputField
                label={<TranslatedText text="메일 주소" />}
                name="email"
                type="email"
                value={email}
                onChange={handleInputChange}
                placeholder={placeholders.email}
                maxLength={100}
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                error={!isEmailValid && email.length > 0}
            />
            <TextAreaField
                label={<TranslatedText text="문의 내용" />}
                value={inquiryContent}
                onChange={handleTextAreaChange}
                placeholder={placeholders.content}
                maxLength={3000}
                showCount
            />
        </div>
    );
};

export default FormFields;
