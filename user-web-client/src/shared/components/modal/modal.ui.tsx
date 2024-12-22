import { TranslatedText } from '@shared/components/translated-text/translated-text.ui';
import { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="flex  max-w-md flex-col rounded-xl border border-solid border-neutral-200 bg-white px-8 py-6">
                <h4 className="mb-4 text-h2 text-neutral-800">
                    <TranslatedText text={title} />
                </h4>
                <div className="mb-6 text-sub1 text-neutral-700">
                    <TranslatedText text={children} />
                </div>
                <button
                    className="rounded-lg bg-primary-500 p-4 text-white hover:bg-primary-600"
                    onClick={onClose}
                >
                    <h4 className="whitespace-nowrap text-h4 text-white">
                        <TranslatedText text="확인" />
                    </h4>
                </button>
            </div>
        </div>
    );
};
