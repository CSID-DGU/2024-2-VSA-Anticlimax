'use client';

import { IconChevronDown, IconSearch } from 'public/svgs';
import {
    ChangeEvent,
    KeyboardEvent,
    ReactElement,
    useEffect,
    useState,
} from 'react';

import { useLanguage } from '@/shared/contexts/LanguageContext';

interface IOption {
    value: string;
    label: string | React.ReactNode;
}

interface ISearchDrugProps {
    options: IOption[];
    onSearch: (searchTerm: string, option: string) => void;
    initialSearchTerm?: string;
    initialSelectedOption?: string;
}

const SearchDrug = ({
    options,
    onSearch,
    initialSearchTerm,
    initialSelectedOption,
}: ISearchDrugProps): ReactElement => {
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm || '');
    const [selectedOption, setSelectedOption] = useState<IOption>(options[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const onSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const onOptionSelect = (option: IOption) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    const onClick = () => {
        onSearch(searchTerm, selectedOption.value);
    };

    return (
        <div className="mt-10 w-full max-w-3xl">
            <div className="mb-8 flex w-full items-center">
                <div className="flex w-full max-w-4xl items-center p-4 ">
                    <CustomDropdown
                        options={options}
                        selectedOption={selectedOption}
                        onOptionSelect={onOptionSelect}
                        isOpen={isDropdownOpen}
                        setIsOpen={setIsDropdownOpen}
                    />
                    <SearchInput
                        searchTerm={searchTerm}
                        onChange={onSearchTermChange}
                        onClick={onClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchDrug;

interface ISearchInputProps {
    searchTerm: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
}

const SearchInput = ({
    searchTerm,
    onChange,
    onClick,
}: ISearchInputProps): ReactElement => {
    const { translate, currentLang } = useLanguage();
    const [placeholder, setPlaceholder] = useState('약 이름으로 검색해보세요');

    useEffect(() => {
        const updatePlaceholder = async () => {
            const translated = await translate('약 이름으로 검색해보세요');
            setPlaceholder(translated);
        };
        updatePlaceholder();
    }, [currentLang, translate]);

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div className="ml-2 mr-4 flex w-full flex-row justify-center">
            <div className="relative w-full">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                    className="w-full rounded-2xl border border-solid border-neutral-200 px-4 py-[18px] text-h5"
                />
                <div
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={onClick}
                >
                    <IconSearch />
                </div>
            </div>
        </div>
    );
};

interface CustomDropdownProps {
    options: IOption[];
    selectedOption: IOption;
    onOptionSelect: (option: IOption) => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const CustomDropdown = ({
    options,
    selectedOption,
    onOptionSelect,
    isOpen,
    setIsOpen,
}: CustomDropdownProps): ReactElement => {
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="flex w-full items-center rounded-[20px] border border-neutral-200 bg-white py-2 pl-4 pr-2"
            >
                <p className="whitespace-nowrap text-h5">
                    {selectedOption.label}
                </p>
                <IconChevronDown />
            </button>
            {isOpen && (
                <ul className="absolute z-10 mt-2 w-full overflow-hidden rounded-2xl border border-solid border-neutral-200 bg-white">
                    {options.map((option, index) => (
                        <li
                            key={option.value}
                            onClick={() => onOptionSelect(option)}
                            className={`cursor-pointer px-4 py-2 text-sub1 hover:bg-gray-100  ${
                                option.value === selectedOption.value
                                    ? 'bg-gray-100'
                                    : ''
                            } ${index === 0 ? 'rounded-t-2xl' : ''} ${
                                index === options.length - 1
                                    ? 'rounded-b-2xl'
                                    : ''
                            }`}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
