'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconHamburger, IconXRounded, WooahanNavLogo } from 'public/svgs';
import { useState } from 'react';

import { TranslatedText } from '@/shared/components/translated-text/translated-text.ui';
import { useLanguage } from '@/shared/contexts/LanguageContext';

/**
 * Public Component
 */

interface NavItem {
    label: string | React.ReactNode;
    link?: string;
    onClick?: () => void;
}

const Navbar = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const { currentLang, toggleLanguage } = useLanguage();

    const handleLanguageToggle = () => {
        console.log('Current language:', currentLang);
        toggleLanguage();
    };

    const onSideBarClick = () => {
        setIsSideBarOpen(!isSideBarOpen);
    };

    const NavLeftList: NavItem[] = [
        {
            label: <TranslatedText text="우아한 칼럼" />,
            link: '/article',
        },
        {
            label: <TranslatedText text="약 찾아보기" />,
            link: '/drug',
        },
    ];

    const NavRightList: NavItem[] = [
        {
            label: <TranslatedText text="제휴 문의" />,
            link: '/coalition',
        },
        // {
        //     label: <TranslatedText text="앱 다운로드" />,
        //     link: '/app-download',
        // },
        {
            label: currentLang === 'KOR' ? 'ENG' : 'KOR',
            onClick: handleLanguageToggle,
        },
    ];

    return (
        <>
            <div className="fixed z-50 flex h-20 w-full items-center justify-between bg-white px-8 py-5">
                {/* Logo */}
                <Link href="/" className="flex items-center pr-8">
                    <WooahanNavLogo />
                </Link>

                {/* --------------------------------------------- */}
                {/* ------------  Desktop Navigation ------------ */}
                {/* --------------------------------------------- */}
                <div className="hidden w-full items-center justify-between desktop:flex">
                    <div className="flex gap-2">
                        {NavLeftList.map((item, index) => (
                            <NavButton
                                key={index}
                                label={item.label}
                                link={item.link}
                            />
                        ))}
                    </div>
                    <div className="flex gap-2">
                        {NavRightList.map((item, index) => (
                            <NavButton
                                key={index}
                                label={item.label}
                                link={item.link}
                                onClick={item.onClick}
                            />
                        ))}
                    </div>
                </div>

                {/* --------------------------------------------- */}
                {/* ------------  Mobile Toggle Icon ------------ */}
                {/* --------------------------------------------- */}
                <div className="desktop:hidden">
                    {isSideBarOpen ? (
                        <IconXRounded
                            className="size-6"
                            onClick={onSideBarClick}
                        />
                    ) : (
                        <IconHamburger
                            className="size-6"
                            onClick={onSideBarClick}
                        />
                    )}
                </div>
            </div>

            {/* --------------------------------------------- */}
            {/* ------------  Sidebar for Mobile ------------ */}
            {/* --------------------------------------------- */}
            {isSideBarOpen && (
                <div className="fixed left-0 top-0 z-40 flex size-full flex-col bg-white p-8 desktop:hidden">
                    <div className="mb-8 flex items-center justify-between">
                        <Link
                            href="/"
                            className="flex items-center"
                            onClick={onSideBarClick}
                        >
                            <WooahanNavLogo />
                        </Link>
                        <IconXRounded
                            className="size-6"
                            onClick={onSideBarClick}
                        />
                    </div>
                    <div className="flex flex-col gap-6">
                        {NavLeftList.map((item, index) => (
                            <NavButton
                                key={index}
                                label={item.label}
                                link={item.link}
                                onClick={onSideBarClick}
                            />
                        ))}
                        {NavRightList.map((item, index) => (
                            <NavButton
                                key={index}
                                label={item.label}
                                link={item.link}
                                onClick={item.onClick || onSideBarClick}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;

/**
 * Private Component
 */

const NavButton: React.FC<NavItem> = ({ label, link, onClick }) => {
    const pathname = usePathname();
    const selectStyle = 'text-primary-500';
    const isActive = pathname === link ? selectStyle : '';

    if (onClick) {
        return (
            <button
                className={`cursor-pointer whitespace-nowrap rounded-md text-h2 text-neutral-500 ${isActive} px-5 py-3 transition duration-200 ease-in-out hover:bg-neutral-50`}
                onClick={onClick}
            >
                {label}
            </button>
        );
    }

    return (
        <Link
            className={`cursor-pointer whitespace-nowrap rounded-md text-h2 text-neutral-500 ${isActive} px-5 py-3 transition duration-200 ease-in-out hover:bg-neutral-50`}
            href={link || '/'}
        >
            {label}
        </Link>
    );
};
