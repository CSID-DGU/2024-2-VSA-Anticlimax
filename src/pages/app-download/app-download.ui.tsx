import { TranslatedText } from '@shared/components/translated-text/translated-text.ui';
import {
    IconAndroid,
    IconApple,
    IconQR,
    IconQRAndroid,
    WooahanDownloadLogo,
} from 'public/svgs';
import { ReactElement } from 'react';

const AppDownloadPage = (): ReactElement => {
    return (
        <div className="mx-auto h-lvh w-full">
            <div className="mx-auto mt-20 flex w-fit flex-col rounded-2xl bg-white px-24 pb-9 pt-12">
                <WooahanDownloadLogo className="mx-auto mb-4 flex" />
                <div className="mx-auto flex text-center text-h5 text-neutral-700">
                    <p>
                        <TranslatedText text="올바른 약과 영양제의 복용방법, 음식과의 상호작용, 올바른" />
                        <br />
                        <TranslatedText text="영양제 구매 팁 등을 통하여 사람들에게 유익한 정보를 제공합니다." />
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-8 flex w-full flex-row justify-center gap-20">
                <DownloadSection
                    platform="iOS"
                    icon={<IconApple className="mr-2" />}
                    link=""
                    qrCode={<IconQR />}
                />
                <DownloadSection
                    platform="Android"
                    icon={<IconAndroid className="mr-2" />}
                    link=""
                    qrCode={<IconQRAndroid />}
                />
            </div>
        </div>
    );
};
export default AppDownloadPage;

type DownloadSectionProps = {
    platform: string;
    icon: ReactElement;
    link: string;
    qrCode?: ReactElement;
};

const DownloadSection = ({
    platform,
    icon,
    link,
    qrCode,
}: DownloadSectionProps) => (
    <div className="flex flex-col items-center">
        <p className="mb-2 text-h1">{platform}</p>
        <div className="mb-5 hidden rounded-2xl border-2 border-solid border-neutral-100 bg-white p-2 md:block">
            {qrCode}
        </div>
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center rounded-lg border-2 border-solid border-neutral-100 bg-white px-5 py-3 text-h4 text-neutral-700 transition duration-200 ease-in-out hover:bg-neutral-50"
        >
            {icon}
            <TranslatedText text="다운로드" />
        </a>
    </div>
);
