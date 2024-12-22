'use client';

import { ArticleListDto } from '@entities/article';
import { IconLeftChevron, IconRightChevron } from 'public/svgs';
import { Fragment, ReactElement } from 'react';

import ArticleItem from './read-article-item.ui';

/**
 * Public Component
 */

interface IReadArticleListProps {
    articleList: ArticleListDto;
    page: number;
    setPage: (page: number) => void;
}

const ReadArticleList = (props: IReadArticleListProps): ReactElement => {
    const articleList = props.articleList;

    const handlePageChange = (page: number) => {
        props.setPage(page);
    };

    return (
        <div className="flex w-full flex-col items-center">
            <div className="mb-8 flex w-full flex-col items-center">
                {articleList &&
                    articleList.articles.map((article, index) => (
                        <Fragment key={index}>
                            <ArticleItem article={article} />
                            {index !== articleList.articles.length - 1 && (
                                <div className="h-4 w-full" />
                            )}
                        </Fragment>
                    ))}
            </div>
            {articleList && (
                <PageIndicator
                    totalPages={articleList.pageInfo.totalPage}
                    currentPage={props.page}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
};

export default ReadArticleList;

/**
 * Private Component
 */

interface PageIndicatorProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PageIndicator = ({
    currentPage,
    totalPages,
    onPageChange,
}: PageIndicatorProps) => {
    const getPageNumbers = () => {
        const pageNumbers = [];
        let start = Math.max(1, currentPage - 2);
        const end = Math.min(start + 4, totalPages);

        if (end - start < 4) {
            start = Math.max(1, end - 4);
        }

        for (let i = start; i <= end; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={handlePrevPage}
                className={`flex size-8 items-center justify-center ${
                    currentPage === 1
                        ? 'cursor-not-allowed text-neutral-200'
                        : 'cursor-pointer text-neutral-500'
                }`}
                disabled={currentPage === 1}
            >
                <IconLeftChevron />
            </button>

            {getPageNumbers().map((pageNum) => (
                <button
                    key={pageNum}
                    onClick={() => onPageChange(pageNum)}
                    className={`flex size-8 cursor-pointer items-center justify-center text-sub1 ${
                        currentPage === pageNum
                            ? 'text-black'
                            : 'text-neutral-200'
                    }`}
                >
                    {pageNum}
                </button>
            ))}

            <button
                onClick={handleNextPage}
                className={`flex size-8 items-center justify-center ${
                    currentPage === totalPages
                        ? 'cursor-not-allowed text-neutral-200'
                        : 'cursor-pointer text-neutral-500'
                }`}
                disabled={currentPage === totalPages}
            >
                <IconRightChevron />
            </button>
        </div>
    );
};
