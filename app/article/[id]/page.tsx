import { ArticleQueries } from '@entities/article/article.queries';
import { HydratedArticleDetailContent } from '@pages/article-detail';
import { queryClient } from '@shared/lib/react-query';
import { dehydrate } from '@tanstack/react-query';

interface IArticleDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ArticleDetailPage(
    props: IArticleDetailPageProps,
) {
    const { id } = await props.params;

    await queryClient.prefetchQuery(
        ArticleQueries.articleDetailQuery(parseInt(id)),
    );

    const dehydratedState = dehydrate(queryClient);

    return <HydratedArticleDetailContent dehydratedState={dehydratedState} />;
}
