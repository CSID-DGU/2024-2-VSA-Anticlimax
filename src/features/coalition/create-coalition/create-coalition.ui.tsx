'use client';

import { CreateCoalitionDtoSchema } from '@entities/coalition/coalition.contracts';
import { useCreateCoalition } from '@entities/coalition/coalition.queries';
import Button from '@shared/components/button/button.ui';
import { Modal } from '@shared/components/modal/modal.ui';
import { TranslatedText } from '@shared/components/translated-text/translated-text.ui';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';

import FormFields from './create-coalition-form-fields.ui';

/**
 * Public Component
 */

const CreateCoalition = () => {
    const router = useRouter();
    const { mutate: createCoalition } = useCreateCoalition();
    const [contactName, setContactName] = useState<string>('');
    const [contactInfo, setContactInfo] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [inquiryContent, setInquiryContent] = useState<string>('');
    const [isAgreementChecked, setIsAgreementChecked] =
        useState<boolean>(false);
    const [modalState, setModalState] = useState<{
        isOpen: boolean;
        title: string;
        message: string;
        onClose: () => void;
    }>({
        isOpen: false,
        title: '',
        message: '',
        onClose: () => {},
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'contactName') setContactName(value);
        if (name === 'contactInfo') setContactInfo(value);
        if (name === 'email') setEmail(value);
    };

    const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setInquiryContent(e.target.value);
    };

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsAgreementChecked(e.target.checked);
    };

    const handleSubmit = () => {
        const coalitionData = {
            contactName,
            contactInfo,
            email,
            inquiryContent,
        };

        const validation = CreateCoalitionDtoSchema.safeParse(coalitionData);

        if (!validation.success) {
            setModalState({
                isOpen: true,
                title: '입력 오류',
                message: '입력 정보를 다시 확인해주세요.',
                onClose: () =>
                    setModalState((prev) => ({ ...prev, isOpen: false })),
            });
            return;
        }

        createCoalition(coalitionData, {
            onSuccess: () => {
                setModalState({
                    isOpen: true,
                    title: '제출 완료',
                    message: '제휴 문의가 성공적으로 접수되었습니다.',
                    onClose: () => {
                        setModalState((prev) => ({ ...prev, isOpen: false }));
                        router.push('/');
                    },
                });
            },
            onError: () => {
                setModalState({
                    isOpen: true,
                    title: '오류 발생',
                    message:
                        '제휴 문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.',
                    onClose: () =>
                        setModalState((prev) => ({ ...prev, isOpen: false })),
                });
            },
        });
    };

    return (
        <>
            <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 text-left">
                <HeaderSection />
                <hr className="mb-14 mt-6" />
                <FormFields
                    contactName={contactName}
                    contactInfo={contactInfo}
                    email={email}
                    inquiryContent={inquiryContent}
                    handleInputChange={handleInputChange}
                    handleTextAreaChange={handleTextAreaChange}
                />
                <PrivacyAgreement />
                <AgreementCheckbox
                    isChecked={isAgreementChecked}
                    onChange={handleCheckboxChange}
                />
                <Button
                    label={<TranslatedText text="제출하기" />}
                    isActive={
                        isAgreementChecked &&
                        !!contactName &&
                        !!email &&
                        !!inquiryContent
                    }
                    onClick={handleSubmit}
                />
            </div>
            <Modal
                isOpen={modalState.isOpen}
                onClose={modalState.onClose}
                title={modalState.title}
            >
                <p className="text-sub1 text-neutral-700">
                    <TranslatedText text={modalState.message} />
                </p>
            </Modal>
        </>
    );
};
export default CreateCoalition;

/**
 * Private Component
 */

const HeaderSection = () => (
    <div className="flex flex-col text-left">
        <h2 className="mb-3 text-h1 text-neutral-900">
            <TranslatedText text="우아한 제휴 문의" />
        </h2>
        <p className="text-sub2 leading-6 text-neutral-700">
            <TranslatedText text="아래 양식을 제출해주시면, 제휴 담당자가 이메일 및 전화로 연락드립니다." />
            <br />
            <TranslatedText text="또한, 급한건이시면 아래 메일로 보내주세요!" />
            <br />
            contact@viewpam.com
        </p>
    </div>
);

const PrivacyAgreement = () => (
    <div className="text-left">
        <p className="mb-3 text-h4">
            <TranslatedText text="개인 정보 수집 동의" />
        </p>
        <div className="mb-4 max-h-48 overflow-y-auto rounded-lg border border-solid border-neutral-300 p-4 text-sm">
            <p className="mt-2 text-sub3 text-neutral-700">
                <TranslatedText text="개인 정보 수집 동의서 귀하의 소중한 개인 정보를 안전하게 보호하고자 아래와 같이 동의를 요청드립니다." />
                <br />
                <br />
                <TranslatedText text="귀하의 개인 정보는 오직 아래 명시된 목적을 위해서만 사용됩니다." />
                <br />
                <TranslatedText text="수집 항목: 이름, 전화번호, 메일 주소" />
                <br />
                <TranslatedText text="수집 목적: 서비스 제공 및 원활한 의사소통, 고객 상담 및 불만 처리" />
                <br />
                <br />
                <TranslatedText text="*이 정보는 귀하의 동의 하에 수집되며, 목적 외 사용은 엄격히 금지됩니다. 회사는 해당 정보의 보호에 최선을 다합니다." />
            </p>
        </div>
    </div>
);

interface AgreementCheckboxProps {
    isChecked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AgreementCheckbox: React.FC<AgreementCheckboxProps> = ({
    isChecked,
    onChange,
}) => (
    <div className="mb-24 flex items-center">
        <input
            type="checkbox"
            id="agreement"
            className="mr-2"
            checked={isChecked}
            onChange={onChange}
        />
        <label htmlFor="agreement" className="text-h5 text-neutral-700">
            <TranslatedText text="네, 동의합니다!" />
        </label>
    </div>
);
