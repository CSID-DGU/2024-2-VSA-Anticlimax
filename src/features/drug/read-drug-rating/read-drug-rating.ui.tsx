import { RatingDto } from '@entities/rating';
import { readDrugRatingsMock } from '@entities/rating';
import { StarIcon } from '@heroicons/react/24/solid';
import { TranslatedText } from '@shared/components/translated-text/translated-text.ui';
import { useEffect, useState } from 'react';

const ReadDrugRating = ({ drugId }: { drugId: string }) => {
    const [ratingData, setRatingData] = useState<RatingDto>();

    useEffect(() => {
        setRatingData(readDrugRatingsMock);
    }, []);

    if (!ratingData) return null;

    const formatCount = (count: number) => {
        return count > 99 ? '99+' : count.toString();
    };

    return (
        <div className="mx-auto max-w-md">
            <div className="rounded-3xl bg-white px-8 py-5">
                <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-h1 font-bold text-neutral-900">
                            {ratingData.data.averageRating.toFixed(1)}점
                        </span>
                        <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <StarIcon
                                    key={star}
                                    className={`size-6 ${
                                        star <= ratingData.data.averageRating
                                            ? 'text-primary-500'
                                            : 'text-neutral-200'
                                    }`}
                                />
                            ))}
                            <p className="text-h6 text-neutral-600">
                                {ratingData.data.averageRating}/5
                            </p>
                        </div>
                        <span className="text-h5 text-neutral-600">
                            <TranslatedText text="댓글" />{' '}
                            {ratingData.data.totalCount}{' '}
                            <TranslatedText text="개" />
                        </span>
                    </div>
                    <div className="mt-4 flex flex-col gap-4 lg:mt-0">
                        {[5, 4, 3, 2, 1].map((score) => {
                            const ratingItem = ratingData.data.ratings.find(
                                (r) => r.rating === score,
                            ) || { rating: score, count: 0 };

                            return (
                                <div
                                    key={score}
                                    className="flex items-center gap-4"
                                >
                                    <span className="w-7 text-h5 text-neutral-800">
                                        {score}점
                                    </span>

                                    <div className="relative h-1.5 w-24 overflow-hidden rounded-full bg-neutral-100">
                                        <div
                                            className="h-full rounded-full bg-primary-500 transition-all duration-700"
                                            style={{
                                                width: ratingData.data
                                                    .totalCount
                                                    ? `${(ratingItem.count / ratingData.data.totalCount) * 100}%`
                                                    : '0%',
                                            }}
                                        />
                                    </div>

                                    <span className="w-7 text-right text-h5 text-neutral-600">
                                        {formatCount(ratingItem.count)}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadDrugRating;
