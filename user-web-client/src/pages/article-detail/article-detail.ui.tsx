'use client';

import { ArticleQueries } from '@entities/article/article.queries';
import { ReadArticle } from '@features/article/read-article';
import { TranslatedText } from '@shared/components/translated-text/translated-text.ui';
import {
    DehydratedState,
    HydrationBoundary,
    useSuspenseQuery,
} from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { IconLeftChevron } from 'public/svgs';
import { ReactElement } from 'react';

interface IArticleDetailContentProps {
    id: string;
}

const ArticleDetailContent = (
    props: IArticleDetailContentProps,
): ReactElement => {
    const { data } = useSuspenseQuery(
        ArticleQueries.articleDetailQuery(parseInt(props.id)),
    );

    return (
        <div className="mx-auto h-lvh md:w-full xl:w-3/5">
            <Header />
            <ReadArticle article={data} />
        </div>
    );
};

interface HydratedArticleDetailContentProps {
    dehydratedState: DehydratedState;
}

export const HydratedArticleDetailContent = ({
    dehydratedState,
}: HydratedArticleDetailContentProps): ReactElement => {
    const params = useParams<{ id: string }>();

    if (!params || !params.id) {
        return <div>Invalid article ID</div>;
    }

    return (
        <HydrationBoundary state={dehydratedState}>
            <ArticleDetailContent id={params.id} />
        </HydrationBoundary>
    );
};

export default HydratedArticleDetailContent;

const Header = (): ReactElement => {
    const router = useRouter();

    const handleBackButtonClick = () => {
        router.back();
    };

    return (
        <div className="mb-4 flex flex-col sm:mt-12 md:mt-12 xl:mt-16">
            <div
                className="ml-1 flex w-fit cursor-pointer flex-row items-center gap-2 rounded-lg p-2 hover:bg-neutral-100 "
                onClick={handleBackButtonClick}
            >
                <IconLeftChevron />
                <h5 className="text-h5 text-neutral-800">
                    <TranslatedText text="뒤로가기" />
                </h5>
            </div>
        </div>
    );
};
