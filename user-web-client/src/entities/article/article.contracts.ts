import { z } from 'zod';

const PageDto = z.object({
    totalPage: z.number(),
    currentPage: z.number(),
    totalCnt: z.number(),
    currentCnt: z.number(),
});

export const ArticleDtoSchema = z.object({
    id: z.number().optional(),
    title: z.string(),
    content: z.string(),
    hashTags: z.array(z.string()).optional(),
    thumbnailUrl: z.string().optional().nullable(),
    creator: z.string(),
    createdAt: z.string(),
});

export const ArticleListDtoSchema = z.object({
    pageInfo: PageDto,
    articles: z.array(ArticleDtoSchema),
});

export type ArticleListDto = z.infer<typeof ArticleListDtoSchema>;
export type ArticleDto = z.infer<typeof ArticleDtoSchema>;
