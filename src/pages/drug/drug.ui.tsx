'use client';

import {
    DrugOverview,
    DrugOverviewListDto,
} from '@entities/drug/drug.contracts';
import { DrugQueries } from '@entities/drug/drug.queries';
import { ReadDrugList } from '@features/drug/read-drug-list';
import { SearchDrug } from '@features/drug/search-drug';
import { TranslatedText } from '@shared/components/translated-text/translated-text.ui';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { IconSearchDrug } from 'public/svgs';
import { ReactElement, Suspense, useState } from 'react';

const DrugContentInner = (): ReactElement => {
    const searchParams = useSearchParams();
    const initialSearchTerm = searchParams?.get('search') || '';
    const initialSelectedOption = searchParams?.get('type') || 'VITAMIN';

    const options = [
        { value: 'VITAMIN', label: <TranslatedText text="영양제" /> },
        { value: 'MEDICINE', label: <TranslatedText text="의약품" /> },
    ];

    const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);
    const [hasSearched, setHasSearched] = useState(!!initialSearchTerm);
    const [selectedOption, setSelectedOption] = useState(initialSelectedOption);

    const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<
        DrugOverviewListDto,
        Error,
        InfiniteData<DrugOverviewListDto>,
        string[],
        number
    >({
        queryKey: ['drugs', selectedOption, searchTerm],
        queryFn: async ({ pageParam = 1 }) => {
            const response = await DrugQueries.drugOverviewListQuery(
                selectedOption as 'VITAMIN' | 'MEDICINE',
                searchTerm,
                pageParam,
                30,
            )();
            return response;
        },
        getNextPageParam: (lastPage) =>
            lastPage.pageInfo.currentPage < lastPage.pageInfo.totalPage
                ? lastPage.pageInfo.currentPage + 1
                : undefined,
        initialPageParam: 1,
    });

    const allDrugs =
        data?.pages.reduce<DrugOverview[]>((acc, page) => {
            return [...acc, ...page.drugs];
        }, []) ?? [];

    const handleSearch = (searchTerm: string, option: string) => {
        setSearchTerm(searchTerm);
        setHasSearched(true);
        setSelectedOption(option);
    };

    return (
        <div className="mb-10 flex min-h-screen flex-col items-center bg-neutral-50">
            <SearchDrug
                options={options}
                onSearch={handleSearch}
                initialSearchTerm={searchTerm}
                initialSelectedOption={selectedOption}
            />

            {hasSearched ? (
                <ReadDrugList
                    drugs={allDrugs}
                    selectedType={selectedOption}
                    hasNextPage={hasNextPage}
                    onLoadMore={fetchNextPage}
                />
            ) : (
                <div className="mt-20 flex flex-col items-center justify-center">
                    <IconSearchDrug />
                    <p className="mt-4 text-h2 text-neutral-500">
                        <TranslatedText text="약을 쉽게 찾아봐요!" />
                    </p>
                </div>
            )}
        </div>
    );
};

export const DrugContent = (): ReactElement => {
    return (
        <Suspense>
            <DrugContentInner />
        </Suspense>
    );
};
