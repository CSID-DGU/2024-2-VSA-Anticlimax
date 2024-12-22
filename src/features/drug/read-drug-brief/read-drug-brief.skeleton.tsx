import { ReactElement } from 'react';

interface ReadDrugSkeletonProps {
    type?: 'VITAMIN' | 'ETC_MEDICINE' | 'OTC_MEDICINE';
}

export const ReadDrugSkeleton = ({
    type,
}: ReadDrugSkeletonProps): ReactElement => {
    return (
        <div className="flex flex-col items-center gap-4">
            <div
                className={`animate-pulse rounded-lg bg-neutral-100 ${
                    type === 'VITAMIN' ? 'size-[320px]' : 'h-[184px] w-[440px]'
                }`}
            />
            <div className="mt-7 text-center">
                <div className="mb-2 h-7 w-48 animate-pulse rounded-md bg-neutral-100" />
                <div className="h-8 w-64 animate-pulse rounded-md bg-neutral-100" />
            </div>
        </div>
    );
};
