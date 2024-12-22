import { ReactElement } from 'react';

export const ReadDrugReviewSkeleton = (): ReactElement => {
    return (
        <div className="w-full rounded-3xl bg-white px-8 py-5">
            {[1, 2, 3].map((i) => (
                <div
                    key={i}
                    className="border-b border-neutral-100 py-4 last:border-none"
                >
                    <div className="mb-2 flex items-center justify-between">
                        <div className="h-6 w-20 animate-pulse rounded-md bg-neutral-100" />
                        <div className="flex items-center gap-2">
                            <div className="h-5 w-24 animate-pulse rounded-md bg-neutral-100" />
                            <div className="h-5 w-16 animate-pulse rounded-md bg-neutral-100" />
                        </div>
                    </div>
                    <div className="h-4 w-full animate-pulse rounded-md bg-neutral-100" />
                </div>
            ))}
        </div>
    );
};
