'use client';

import { DrugOverview } from '@entities/drug/drug.contracts';
import { TranslatedText } from '@shared/components/translated-text/translated-text.ui';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { DefaultDrugImage, DefaultVitaminImage } from 'public/images';
import { ReactElement, useState } from 'react';

interface ReadDrugItemProps {
    drug: DrugOverview;
}

const ReadDrugItem = ({ drug }: ReadDrugItemProps): ReactElement => {
    const router = useRouter();
    const [isImageLoading, setIsImageLoading] = useState(true);

    const handleDrugClick = () => {
        router.push(`/drug/${drug.id}?type=${drug.type}`);
    };

    const getMedicineType = (type: string) => {
        switch (type) {
            case 'OTC_MEDICINE':
                return <TranslatedText text="일반의약품" />;
            case 'ETC_MEDICINE':
                return <TranslatedText text="전문의약품" />;
            default:
                return '';
        }
    };

    return (
        <div
            className={`flex cursor-pointer flex-col items-center rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:bg-neutral-100 sm:max-w-[170px] md:min-w-[230px] ${
                drug.type === 'VITAMIN' ? 'min-h-[280px] ' : 'min-h-[220px] '
            }`}
            onClick={handleDrugClick}
        >
            <div
                className={`relative mb-6 w-[160px] ${
                    drug.type === 'VITAMIN'
                        ? 'mobile:min-h-[110px] md:min-h-[160px]'
                        : 'mobile:min-h-[56px] md:min-h-[66px]'
                }`}
            >
                {isImageLoading && (
                    <div
                        className={`absolute inset-0 animate-pulse rounded-2xl bg-neutral-100`}
                    />
                )}
                <Image
                    src={
                        drug.imageUrl ||
                        (drug.type === 'VITAMIN'
                            ? DefaultVitaminImage
                            : DefaultDrugImage)
                    }
                    alt={drug.name}
                    fill
                    className="rounded-2xl object-contain"
                    onLoadingComplete={() => setIsImageLoading(false)}
                />
            </div>
            <h3 className="mb-3 w-full truncate text-center text-h4 text-neutral-900">
                <TranslatedText text={drug.name} />
            </h3>
            <p className="mb-5 w-full truncate text-center text-h5 text-neutral-600">
                <TranslatedText text={drug.classificationOrManufacturer} />
            </p>
            <div className="flex flex-wrap justify-center gap-2">
                {drug.type !== 'VITAMIN' ? (
                    <p className="rounded-xl bg-secondary-50 px-2 py-1 text-sub1 text-secondary-500">
                        {getMedicineType(drug.type)}
                    </p>
                ) : (
                    drug.categories.map((category, index) => (
                        <p
                            key={index}
                            className="rounded-xl bg-secondary-50 px-2 py-1 text-sub1 text-secondary-500"
                        >
                            <TranslatedText text={category} />
                        </p>
                    ))
                )}
            </div>
        </div>
    );
};

export default ReadDrugItem;
