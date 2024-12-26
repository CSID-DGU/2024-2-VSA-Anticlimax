import { TranslatedText } from '@shared/components/translated-text/translated-text.ui';
import { IconInstagram, IconKakao } from 'public/svgs';

export default function Footer() {
    return (
        <footer className="w-full bg-neutral-100 p-8 text-neutral-500">
            <div className="mx-auto flex w-full flex-col items-center justify-between gap-4 desktop:flex-row desktop:items-start">
                <div className="order-first mb-5 flex flex-row gap-3 self-center desktop:order-last desktop:flex-col desktop:self-auto">
                    <a
                        href="http://pf.kakao.com/_MjUZn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center rounded-md border bg-white px-6 py-3 text-sub2 text-neutral-700 transition duration-200 ease-in-out hover:bg-neutral-50"
                    >
                        <IconKakao className="mr-2" />
                        <TranslatedText text="카카오톡 문의" />
                    </a>
                    <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center rounded-md border bg-white px-6 py-3 text-sub2 text-neutral-700 transition duration-200 ease-in-out hover:bg-neutral-50"
                    >
                        <IconInstagram className="mr-2" />
                        <TranslatedText text="우아한 인스타그램" />
                    </a>
                </div>
                <div className="text-center text-sub3 leading-relaxed desktop:text-left">
                    <div className="flex flex-col gap-1">
                        <p>
                            <TranslatedText text="단체명 : 우아한" />{' '}
                            <Separator />{' '}
                            <TranslatedText text="대표자 : 서희찬" />{' '}
                            <Separator />{' '}
                            <TranslatedText text="개인정보보호책임자 : 손형준, 윤창섭" />{' '}
                        </p>
                        <p>
                            <TranslatedText text="*우아한에서 제공하는 모든 콘텐츠는 저작권법 보호를 받으며, 무단으로 복제 및 배포하는 경우 저작권법에 의해 처벌 받을 수 있습니다." />
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const Separator = () => {
    return <span className="px-1 text-neutral-300">|</span>;
};
