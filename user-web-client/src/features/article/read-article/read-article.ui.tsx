'use client';

import { ArticleDto } from '@entities/article';
import { TranslatedText } from '@shared/components/translated-text/translated-text.ui';
import { DateUtil } from '@shared/lib/date';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ReactElement } from 'react';
import Markdown from 'react-markdown';

/**
 * Public Component
 */

interface IReadArticleProps {
    article: ArticleDto;
}

const ReadArticle = (props: IReadArticleProps): ReactElement => {
    const article = props.article;

    return (
        <div className="relative flex size-full flex-col items-center">
            {article && (
                <div className="relative w-full">
                    <div className="fade-out min-h-[400px] overflow-hidden rounded-xl bg-white p-5 sm:max-h-[600px] md:max-h-[800px] xl:max-h-[1000px]">
                        <h1 className="mb-4 text-start text-h1 text-neutral-800">
                            <TranslatedText text={article.title} />
                        </h1>
                        <div className="mb-8 flex flex-row gap-2">
                            <span className="text-sub1 text-neutral-400">
                                {article.creator}
                            </span>
                            <span className="text-sub1 text-neutral-400">
                                {DateUtil.convertDateStringToDottedString(
                                    article.createdAt,
                                )}
                            </span>
                        </div>
                        <CustomMarkdown content={article.content} />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-center sm:h-[200px] md:h-[300px] xl:h-[380px]">
                        <DownloadApp />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReadArticle;

/**
 * Private Component
 */

interface IMarkdownProps {
    content: string;
}

const CustomMarkdown = (props: IMarkdownProps) => {
    return (
        <Markdown
            className="text-start"
            components={{
                h1: ({ children }) => (
                    <h1 className="my-4 text-h1 font-bold">
                        <TranslatedText text={children} />
                    </h1>
                ),
                h2: ({ children }) => (
                    <h2 className="my-4 text-h2 font-bold">
                        <TranslatedText text={children} />
                    </h2>
                ),
                h3: ({ children }) => (
                    <h3 className="my-3 text-h3 font-bold">
                        <TranslatedText text={children} />
                    </h3>
                ),
                h4: ({ children }) => (
                    <h4 className="my-3 text-h4 font-bold">
                        <TranslatedText text={children} />
                    </h4>
                ),
                h5: ({ children }) => (
                    <h5 className="my-2 text-h5 font-bold">
                        <TranslatedText text={children} />
                    </h5>
                ),

                ul: ({ children }) => (
                    <ul className="my-2 ml-6 list-disc">
                        <TranslatedText text={children} />
                    </ul>
                ),
                ol: ({ children }) => (
                    <ol className="my-2 ml-6 list-decimal">
                        <TranslatedText text={children} />
                    </ol>
                ),
                li: ({ children }) => (
                    <li className="my-1 text-sub2">
                        <TranslatedText text={children} />
                    </li>
                ),
                img: ({ src, alt }) => (
                    <div className="relative h-[400px] w-full">
                        <Image
                            src={src || ''}
                            alt={alt || ''}
                            fill
                            className="object-contain"
                        />
                    </div>
                ),
                p: ({ children }) => (
                    <p className="my-2 text-sub2">
                        <TranslatedText text={children} />
                    </p>
                ),
            }}
        >
            {props.content}
        </Markdown>
    );
};

const DownloadApp = (): ReactElement => {
    const router = useRouter();

    const handleButtonClick = () => {
        router?.push('/app-download');
    };

    return (
        <div className="mt-80 flex flex-col rounded-xl bg-white px-[64px] py-[24px] shadow-[0px_2px_16px_0px_rgba(70,70,85,0.05)]">
            <div>
                <h4 className="mb-4 text-h4 text-neutral-800">
                    <TranslatedText text="우아한 앱에서 더 자세히 볼 수 있어요." />
                </h4>
                <button
                    className="rounded-lg bg-primary-500 p-4 text-white hover:bg-primary-600"
                    onClick={handleButtonClick}
                >
                    <h4 className="whitespace-nowrap text-h4 text-white">
                        <TranslatedText text="우아한 다운로드" />
                    </h4>
                </button>
            </div>
        </div>
    );
};
