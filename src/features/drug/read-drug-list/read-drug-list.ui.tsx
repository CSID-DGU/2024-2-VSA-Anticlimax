'use client';

import { DrugOverview } from '@entities/drug/drug.contracts';
import { ReactElement, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import ReadDrugItemEmpty from './read-drug-item.empty';
import ReadDrugItemSkeleton from './read-drug-item.skeleton';
import ReadDrugItem from './read-drug-item.ui';

interface ReadDrugListProps {
    drugs: DrugOverview[];
    selectedType: string;
    hasNextPage: boolean;
    onLoadMore: () => void;
}

const ReadDrugList = ({
    drugs,
    selectedType,
    hasNextPage,
    onLoadMore,
}: ReadDrugListProps): ReactElement => {
    const [isInitialLoading, setIsInitialLoading] = useState(true);
    const { ref: loadMoreRef, inView } = useInView();

    useEffect(() => {
        if (drugs.length > 0) {
            setTimeout(() => {
                setIsInitialLoading(false);
            }, 2000);
        }
    }, [drugs]);

    useEffect(() => {
        if (inView && hasNextPage && !isInitialLoading) {
            onLoadMore();
        }
    }, [inView, hasNextPage, isInitialLoading, onLoadMore]);

    if (isInitialLoading) {
        return (
            <div className="grid w-full max-w-3xl grid-cols-1 gap-5 p-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="flex justify-center">
                        <ReadDrugItemSkeleton
                            type={
                                selectedType === 'VITAMIN'
                                    ? 'VITAMIN'
                                    : 'MEDICINE'
                            }
                        />
                    </div>
                ))}
            </div>
        );
    }

    if (drugs.length === 0) {
        return <ReadDrugItemEmpty />;
    }

    return (
        <div className="grid w-full max-w-3xl grid-cols-1 gap-5 p-4 sm:grid-cols-2 lg:grid-cols-3">
            {drugs.map((drug) => (
                <div key={drug.id} className="flex justify-center">
                    <ReadDrugItem drug={drug} />
                </div>
            ))}
            {hasNextPage && (
                <>
                    <div className="flex justify-center">
                        <ReadDrugItemSkeleton
                            type={
                                selectedType === 'VITAMIN'
                                    ? 'VITAMIN'
                                    : 'MEDICINE'
                            }
                        />
                    </div>
                    <div className="flex justify-center">
                        <ReadDrugItemSkeleton
                            type={
                                selectedType === 'VITAMIN'
                                    ? 'VITAMIN'
                                    : 'MEDICINE'
                            }
                        />
                    </div>
                    <div ref={loadMoreRef} className="flex justify-center">
                        <ReadDrugItemSkeleton
                            type={
                                selectedType === 'VITAMIN'
                                    ? 'VITAMIN'
                                    : 'MEDICINE'
                            }
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default ReadDrugList;
