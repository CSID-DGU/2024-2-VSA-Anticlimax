import { ArticleQueries } from '@entities/article/article.queries';
import { HashTagQuery } from '@entities/hash-tag/hash-tag.query';
import { HydratedArticleContent } from '@pages/article/article-hydrated.ui';
import { queryClient } from '@shared/lib/react-query';
import { dehydrate } from '@tanstack/react-query';

export default async function ArticlePage() {
    await queryClient.prefetchQuery(ArticleQueries.articleListQuery());
    await queryClient.prefetchQuery(HashTagQuery.readHashTagListQuery());

    const dehydratedState = dehydrate(queryClient);

    return <HydratedArticleContent dehydratedState={dehydratedState} />;
}
