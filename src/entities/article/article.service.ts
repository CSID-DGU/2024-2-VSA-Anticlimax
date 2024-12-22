import { AxiosContracts, AxiosResponseType } from '@shared/lib/axios';
import httpClient from '@shared/lib/axios/axios.lib';

import {
    ArticleDto,
    ArticleDtoSchema,
    ArticleListDto,
    ArticleListDtoSchema,
} from './article.contracts';

type TSortType = 'createdAt' | 'views';

export class ArticleService {
    static readArticleListQuery(
        searchTerm?: string,
        hashTag?: string,
        sortColumn?: TSortType,
        page?: number,
    ) {
        let baseUrl = '/api/v1/articles/summaries';

        const params = new URLSearchParams();

        if (searchTerm && searchTerm.length > 1) {
            params.append('searchTerm', searchTerm);
        }

        if (hashTag && hashTag.length > 1) {
            params.append('hashTag', hashTag);
        }

        if (sortColumn) {
            params.append('sortColumn', sortColumn);
        }

        if (page) {
            params.append('page', page.toString());
        }

        params.append('size', '4');

        baseUrl = params.toString()
            ? `${baseUrl}?${params.toString()}`
            : baseUrl;

        return httpClient
            .get<AxiosResponseType<ArticleListDto>>(baseUrl)
            .then(AxiosContracts.responseContract(ArticleListDtoSchema));
    }

    static readArticleDetailQuery(id: number) {
        return httpClient
            .get<AxiosResponseType<ArticleDto>>(`/api/v1/articles/${id}`)
            .then(AxiosContracts.responseContract(ArticleDtoSchema));
    }
}
