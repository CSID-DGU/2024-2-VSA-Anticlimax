import { z } from 'zod';

import { ArticleDtoSchema, ArticleListDtoSchema } from './article.contracts';

export type ArticleList = z.infer<typeof ArticleListDtoSchema>;
export type Article = z.infer<typeof ArticleDtoSchema>;
