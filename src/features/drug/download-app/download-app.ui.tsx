import { TranslatedText } from '@shared/components/translated-text/translated-text.ui';
import { useRouter } from 'next/navigation';
import { ReactElement } from 'react';

export const DownloadApp = (): ReactElement => {
    const router = useRouter();

    const handleButtonClick = () => {
        router?.push('/app-download');
    };

    return (
        <div className="flex w-full flex-col rounded-xl border border-solid border-neutral-200 bg-white px-8 py-6">
            <div>
                <h4 className="mb-4 whitespace-nowrap text-h4 text-neutral-800">
                    <TranslatedText text="우아한 앱에서 더 자세히 볼 수 있어요." />
                </h4>
                <button
                    className="rounded-lg bg-primary-500 p-4 text-white hover:bg-primary-600"
                    onClick={handleButtonClick}
                >
                    <h4 className="whitespace-nowrap text-h4 text-white">
                        <TranslatedText text="우아한 다운로드" />
                    </h4>
                </button>
            </div>
        </div>
    );
};
