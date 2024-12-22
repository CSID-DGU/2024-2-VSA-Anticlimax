'use client';

import { DrugQueries } from '@entities/drug';
import { TranslatedText } from '@shared/components/translated-text/translated-text.ui';
import { useSuspenseQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { DefaultDrugImage, DefaultVitaminImage } from 'public/images';
import { ReactElement } from 'react';

interface ReadDrugProps {
    drugId: string;
}

const ReadDrugBrief = ({ drugId }: ReadDrugProps): ReactElement => {
    const { data: drug } = useSuspenseQuery({
        queryKey: DrugQueries.keys.summary(drugId),
        queryFn: DrugQueries.drugSummaryQuery(drugId),
    });

    const defaultImage =
        drug.type === 'VITAMIN' ? DefaultVitaminImage : DefaultDrugImage;

    return (
        <div className="flex flex-col items-center gap-4">
            <Image
                src={drug.imageUrl || defaultImage}
                alt={drug.name}
                className="rounded-lg"
                width={340}
                height={340}
            />
            <div className="mt-7 text-center">
                <p className="text-h4 text-neutral-500">
                    <TranslatedText text={drug.classificationOrManufacturer} />
                </p>
                <h2 className="break-keep text-h2">
                    <TranslatedText text={drug.name} />
                </h2>
            </div>
        </div>
    );
};

export default ReadDrugBrief;
