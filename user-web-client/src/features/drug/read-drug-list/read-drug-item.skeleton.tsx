'use client';

import { ReactElement } from 'react';

interface ReadDrugItemSkeletonProps {
    type?: 'VITAMIN' | 'MEDICINE';
}

const ReadDrugItemSkeleton = ({
    type,
}: ReadDrugItemSkeletonProps): ReactElement => {
    return (
        <div
            className={`flex w-[230px] flex-col items-center rounded-2xl border border-neutral-200 bg-white p-6 ${
                type === 'VITAMIN' ? 'min-h-[280px]' : 'min-h-[220px]'
            }`}
        >
            <div
                className={`relative mb-6 w-[160px] ${
                    type === 'VITAMIN' ? 'h-[160px]' : 'h-[66px]'
                } animate-pulse rounded-2xl bg-neutral-100`}
            />

            <div className="mb-3 h-7 w-full animate-pulse rounded-lg bg-neutral-100" />
            <div className="mb-5 h-5 w-full animate-pulse rounded-lg bg-neutral-100" />

            <div className="flex w-full flex-wrap justify-center gap-2">
                {type === 'VITAMIN' ? (
                    <>
                        <div className="h-7 w-20 animate-pulse rounded-xl bg-neutral-100" />
                        <div className="h-7 w-16 animate-pulse rounded-xl bg-neutral-100" />
                    </>
                ) : (
                    <div className="h-7 w-20 animate-pulse rounded-xl bg-neutral-100" />
                )}
            </div>
        </div>
    );
};

export default ReadDrugItemSkeleton;
