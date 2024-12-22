'use client';
import {
    ReadDrugDetailInfoSection,
    ReadDrugDetailReviewSection,
} from '@features/drug/read-drug-detail-section';
import { TranslatedText } from '@shared/components/translated-text/translated-text.ui';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { IconChevronLeft } from 'public/svgs';
import { ReactElement, useEffect, useState } from 'react';

const ErrorMessage = ({ message }: { message: string }): ReactElement => (
    <div className="flex min-h-[70vh] items-center justify-center">
        <h2 className="text-h2 text-neutral-500">{message}</h2>
    </div>
);

const DrugDetailPage = (): ReactElement => {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);

    const drugId = Array.isArray(params?.id) ? params.id[0] : params?.id;
    const type = searchParams?.get('type') as
        | 'VITAMIN'
        | 'ETC_MEDICINE'
        | 'OTC_MEDICINE';

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [drugId, type]);

    if (!drugId || !type) {
        return <ErrorMessage message="약 정보를 찾을 수 없습니다." />;
    }

    const isPrescriptionDrug = type === 'ETC_MEDICINE';

    return (
        <div className="mx-auto max-w-5xl px-5 py-16">
            <button
                onClick={() => router.back()}
                className="-ml-5 mb-6 flex items-center gap-2 rounded-md px-4 py-2 text-h5 text-neutral-800 transition duration-200 ease-in-out hover:bg-neutral-100"
            >
                <IconChevronLeft />
                <TranslatedText text="뒤로가기" />
            </button>

            <div
                className={`mt-10 flex ${
                    isPrescriptionDrug
                        ? 'mx-auto max-w-2xl justify-center'
                        : 'flex-col gap-8 lg:flex-row'
                }`}
            >
                <ReadDrugDetailInfoSection
                    drugId={drugId}
                    type={type}
                    isLoading={isLoading}
                />

                {!isPrescriptionDrug && (
                    <>
                        <div className="mx-4 w-px bg-neutral-200" />
                        <ReadDrugDetailReviewSection
                            drugId={drugId}
                            isLoading={isLoading}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default DrugDetailPage;
