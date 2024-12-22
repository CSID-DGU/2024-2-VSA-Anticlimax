'use client';

import { IconClose, IconSearch } from 'public/svgs';
import {
    ChangeEvent,
    KeyboardEvent,
    ReactElement,
    useEffect,
    useState,
} from 'react';

import { useLanguage } from '@/shared/contexts/LanguageContext';

interface ISearchArticleProps {
    setSearchTerm: (searchTerm: string) => void;
}

const SearchArticle = (props: ISearchArticleProps): ReactElement => {
    const [queryTerm, setQueryTerm] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQueryTerm(e.target.value);
    };

    const searchOnClick = () => {
        props.setSearchTerm(queryTerm);
    };

    const clearSearchTerm = () => {
        setQueryTerm('');
        props.setSearchTerm('');
    };

    return (
        <div className="mb-8 flex w-full items-center sm:mt-5 md:mt-10">
            <SearchInput
                searchTerm={queryTerm}
                onChange={onChange}
                searchOnClick={searchOnClick}
                clearSearchTerm={clearSearchTerm}
            />
        </div>
    );
};

export default SearchArticle;

interface ISearchInputProps {
    searchTerm: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    searchOnClick: () => void;
    clearSearchTerm: () => void;
}

const SearchInput = (props: ISearchInputProps): ReactElement => {
    const { searchTerm, onChange, searchOnClick, clearSearchTerm } = props;
    const { translate, currentLang } = useLanguage();
    const [placeholder, setPlaceholder] = useState('궁금한 점을 검색해보세요');

    useEffect(() => {
        const updatePlaceholder = async () => {
            const translated = await translate('궁금한 점을 검색해보세요');
            setPlaceholder(translated);
        };
        updatePlaceholder();
    }, [currentLang, translate]);

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            searchOnClick();
        }
    };

    return (
        <div className="flex w-full flex-row justify-center">
            <div className="relative sm:w-full xl:w-3/5">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                    className="w-full rounded-2xl border border-solid border-neutral-200 px-4 py-[18px] text-h5"
                />
                {searchTerm && (
                    <div
                        className="absolute right-12 top-1/2 -translate-y-1/2 cursor-pointer"
                        onClick={clearSearchTerm}
                    >
                        <IconClose />
                    </div>
                )}
                <div
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={searchOnClick}
                >
                    <IconSearch />
                </div>
            </div>
        </div>
    );
};
