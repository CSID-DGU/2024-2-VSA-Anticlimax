import { ReactElement } from 'react';

export const ReadDrugDetailSkeleton = (): ReactElement => {
    return (
        <div className="flex w-full flex-col gap-4">
            <div className="mb-4 h-8 w-32 animate-pulse rounded-md bg-neutral-100" />
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-full rounded-3xl bg-white px-8 py-5">
                    <div className="mb-3 h-6 w-40 animate-pulse rounded-md bg-neutral-100" />
                    <div className="h-20 w-full animate-pulse rounded-md bg-neutral-100" />
                </div>
            ))}
        </div>
    );
};
