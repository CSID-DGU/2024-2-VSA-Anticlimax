import { ReviewDto } from '@entities/review';
import { readDrugReviewsMock } from '@entities/review';
import { StarIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

const ReadDrugReview = ({ drugId }: { drugId: string }) => {
    const [comments, setComments] = useState<ReviewDto[]>();

    useEffect(() => {
        setComments(readDrugReviewsMock.data);
    }, []);

    if (!comments) return null;

    return (
        <div>
            <div className="mt-4 space-y-4">
                <div className="flex flex-col gap-4">
                    {comments.map((comment) => (
                        <div
                            key={comment.id}
                            className="w-full rounded-3xl border bg-white p-4 px-8 py-5"
                        >
                            <div className="flex items-center justify-start gap-2">
                                <span className="text-h4 text-neutral-800">
                                    {comment.writer}
                                </span>
                                <span className="text-sub3 text-neutral-500">
                                    {comment.createdAt}
                                </span>
                            </div>
                            <p className="mt-2 text-left text-sub2 text-neutral-800">
                                {comment.content}
                            </p>
                            <div className="mt-2 flex items-center gap-2">
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <StarIcon
                                            key={star}
                                            className={`size-5 ${
                                                star <= comment.rating
                                                    ? 'text-primary-500'
                                                    : 'text-neutral-200'
                                            }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-sub2 text-neutral-500">
                                    {comment.rating}/5
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReadDrugReview;
