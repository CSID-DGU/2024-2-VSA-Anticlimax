'use client';

import { ReadDrugBrief } from '@features/drug/read-drug-brief';
import { ReadDrugSkeleton } from '@features/drug/read-drug-brief/read-drug-brief.skeleton';
import { ReadDrugDetail } from '@features/drug/read-drug-detail';
import { ReadDrugDetailSkeleton } from '@features/drug/read-drug-detail/read-drug-detail.skeleton';
import { ReactElement } from 'react';

interface ReadDrugDetailInfoSectionProps {
    drugId: string;
    type: 'VITAMIN' | 'ETC_MEDICINE' | 'OTC_MEDICINE';
    isLoading: boolean;
}

export const ReadDrugDetailInfoSection = ({
    drugId,
    type,
    isLoading,
}: ReadDrugDetailInfoSectionProps): ReactElement => {
    return (
        <div className="flex flex-[3] flex-col gap-6">
            {isLoading ? (
                <>
                    <ReadDrugSkeleton type={type} />
                    <ReadDrugDetailSkeleton />
                </>
            ) : (
                <>
                    <ReadDrugBrief drugId={drugId} />
                    <ReadDrugDetail drugId={drugId} type={type} />
                </>
            )}
        </div>
    );
};
