'use client';

import { HashTagList } from '@entities/hash-tag';
import { TranslatedText } from '@shared/components/translated-text/translated-text.ui';
import { ReactElement } from 'react';

/**
 * Public Component
 */

interface IFilterArticleProps {
    hashTagList: HashTagList;
    sortType: TSortType;
    hashTag: string;
    setSortType: (sortType: TSortType) => void;
    setHashTag: (hashTag: string) => void;
}

const FilterArticle = (props: IFilterArticleProps): ReactElement => {
    return (
        <div className="flex flex-col bg-white sm:border-b-4 sm:border-solid sm:border-neutral-100 sm:pb-10 sm:pl-5 sm:pt-5 md:w-full md:border-none md:pb-10 md:pl-5 md:pt-5 xl:w-[210px] xl:pl-10 xl:pt-10">
            <SortArticle
                sortType={props.sortType}
                setSortType={props.setSortType}
            />
            <FilterHashTag
                hashTagList={props.hashTagList}
                selectedHashTag={props.hashTag}
                setHashTag={props.setHashTag}
            />
        </div>
    );
};

export default FilterArticle;

/**
 * Private Component
 */

type TSortType = 'createdAt' | 'views';

interface ISortArticleProps {
    sortType: TSortType;
    setSortType: (sortType: TSortType) => void;
}

const SortArticle = (props: ISortArticleProps): ReactElement => {
    const { sortType, setSortType } = props;

    const sortOptions = [
        { type: 'createdAt' as const, title: '최신순' },
        { type: 'views' as const, title: '인기순' },
    ];

    return (
        <div className="mb-8 flex flex-col items-start">
            <h4 className="mb-4 whitespace-nowrap text-h4 text-neutral-800">
                <TranslatedText text="정렬" />
            </h4>
            <div className="flex gap-2 sm:flex-row md:flex-row xl:flex-col xxl:flex-col">
                {sortOptions.map(({ type, title }) => (
                    <FilterItem
                        key={type}
                        title={title}
                        isActive={sortType === type}
                        onClick={() => setSortType(type)}
                    />
                ))}
            </div>
        </div>
    );
};

interface IFilterHashTagProps {
    hashTagList: HashTagList;
    selectedHashTag: string;
    setHashTag: (hashTag: string) => void;
}

const FilterHashTag = (props: IFilterHashTagProps): ReactElement => {
    const { hashTagList, selectedHashTag, setHashTag } = props;

    return (
        <div className="flex w-full flex-col items-start pr-5">
            <h4 className="mb-4 whitespace-nowrap text-h4 text-neutral-700">
                <TranslatedText text="해쉬태그" />
            </h4>
            <div className="w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex min-w-min gap-2 sm:flex-row md:flex-row xl:flex-col xxl:flex-col">
                    <FilterItem
                        key="all"
                        title="전체"
                        isActive={selectedHashTag === ''}
                        onClick={() => setHashTag('')}
                    />
                    {hashTagList?.hashTags.map((hashTag) => (
                        <FilterItem
                            key={hashTag.id}
                            title={hashTag.name}
                            isActive={hashTag.name === selectedHashTag}
                            onClick={() => setHashTag(hashTag.name)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

interface IFilterItemProps {
    title: string;
    isActive: boolean;
    onClick: () => void;
}

const FilterItem = ({
    title,
    isActive,
    onClick,
}: IFilterItemProps): ReactElement => {
    const containerClassName = `flex items-center justify-center gap-2 rounded-[15px] ${
        isActive ? 'bg-neutral-700' : 'bg-neutral-100'
    } px-[14px] py-1 cursor-pointer w-fit`;

    const textClassName = `text-sub1 ${
        isActive ? 'text-neutral-100' : 'text-neutral-500'
    } whitespace-nowrap`;

    return (
        <div className={containerClassName} onClick={onClick}>
            <p className={textClassName}>
                <TranslatedText text={title} />
            </p>
        </div>
    );
};
