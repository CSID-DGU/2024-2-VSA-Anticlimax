'use client';

import { DownloadApp } from '@features/drug/download-app/download-app.ui';
import { ReadDrugRating } from '@features/drug/read-drug-rating';
import { ReadDrugRatingSkeleton } from '@features/drug/read-drug-rating/read-drug-rating.skeleton';
import { ReadDrugReview } from '@features/drug/read-drug-review';
import { ReadDrugReviewSkeleton } from '@features/drug/read-drug-review/read-drug-review.skeleton';
import { TranslatedText } from '@shared/components/translated-text/translated-text.ui';
import { ReactElement } from 'react';

interface ReadDrugDetailReviewSectionProps {
    drugId: string;
    isLoading: boolean;
}

export const ReadDrugDetailReviewSection = ({
    drugId,
    isLoading,
}: ReadDrugDetailReviewSectionProps): ReactElement => {
    return (
        <div className="flex flex-[3] flex-col gap-6">
            <h2 className="text-left text-h1 text-neutral-900">
                <TranslatedText text="리뷰" />
            </h2>
            <div className="relative">
                <div className="blur-sm">
                    <section className="rounded-lg border-2 border-primary-200">
                        {isLoading ? (
                            <ReadDrugRatingSkeleton />
                        ) : (
                            <ReadDrugRating drugId={drugId} />
                        )}
                    </section>
                    <section className="rounded-lg border-2 border-primary-200">
                        {isLoading ? (
                            <ReadDrugReviewSkeleton />
                        ) : (
                            <ReadDrugReview drugId={drugId} />
                        )}
                    </section>
                </div>
                <div className="absolute left-1/2 top-[20%] -translate-x-1/2 -translate-y-1/2">
                    <DownloadApp />
                </div>
            </div>
        </div>
    );
};
