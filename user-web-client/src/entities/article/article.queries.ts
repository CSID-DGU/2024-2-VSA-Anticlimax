import { queryOptions } from '@tanstack/react-query';

import { ArticleService } from './article.service';

type TSortType = 'createdAt' | 'views';

export class ArticleQueries {
    static readonly keys = {
        list: ['article', 'list'] as const,
        detail: (id: number) => ['article', 'detail', id] as const,
    };

    static articleListQuery(
        searchTerm?: string,
        hashTag?: string,
        sortColumn?: TSortType,
        page?: number,
    ) {
        return queryOptions({
            queryKey: [
                ...this.keys.list,
                searchTerm,
                hashTag,
                sortColumn,
                page,
            ],
            queryFn: async () => {
                const response = await ArticleService.readArticleListQuery(
                    searchTerm,
                    hashTag,
                    sortColumn,
                    page,
                );

                return response.data;
            },
        });
    }

    static articleDetailQuery(id: number) {
        return queryOptions({
            queryKey: [...this.keys.detail(id)],
            queryFn: async () => {
                const response =
                    await ArticleService.readArticleDetailQuery(id);

                return response.data;
            },
        });
    }
}
