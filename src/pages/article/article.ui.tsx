'use client';

import { ArticleQueries } from '@entities/article/article.queries';
import { HashTagQuery } from '@entities/hash-tag/hash-tag.query';
import { FilterArticle } from '@features/article/filter-article';
import ReadArticleList from '@features/article/read-article-list/read-article-list.ui';
import { SearchArticle } from '@features/article/search-article';
import { queryClient } from '@shared/lib/react-query';
import {
    dehydrate,
    DehydratedState,
    HydrationBoundary,
    useSuspenseQuery,
} from '@tanstack/react-query';
import { ReactElement, useState } from 'react';

export async function getServerSideProps() {
    await queryClient.prefetchQuery(ArticleQueries.articleListQuery());

    const dehydratedState = JSON.parse(JSON.stringify(dehydrate(queryClient)));

    return {
        props: {
            dehydratedState,
        },
    };
}

type TSortType = 'createdAt' | 'views';

const ArticleContent = (): ReactElement => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [hashTag, setHashTag] = useState<string>('');
    const [sortColumn, setSortColumn] = useState<TSortType>('createdAt');
    const [page, setPage] = useState<number>(1);

    const { data: articleList } = useSuspenseQuery(
        ArticleQueries.articleListQuery(searchTerm, hashTag, sortColumn, page),
    );

    const { data: hashTagList } = useSuspenseQuery(
        HashTagQuery.readHashTagListQuery(),
    );

    return (
        <div className="mx-auto flex sm:flex-col sm:bg-white md:h-full md:flex-col md:bg-transparent xl:h-lvh xl:flex-row">
            <FilterArticle
                hashTagList={hashTagList}
                sortType={sortColumn}
                hashTag={hashTag}
                setSortType={setSortColumn}
                setHashTag={setHashTag}
            />
            <div className="flex w-full flex-col p-5">
                <SearchArticle setSearchTerm={setSearchTerm} />
                <ReadArticleList
                    articleList={articleList}
                    page={page}
                    setPage={setPage}
                />
            </div>
        </div>
    );
};

const ArticlePage = ({
    dehydratedState,
}: {
    dehydratedState: DehydratedState;
}) => {
    return (
        <HydrationBoundary state={dehydratedState}>
            <ArticleContent />
        </HydrationBoundary>
    );
};

export default ArticlePage;
