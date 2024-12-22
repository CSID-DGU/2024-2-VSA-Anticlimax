import { z } from 'zod';

const RatingItemSchema = z.object({
    rating: z.number().min(1).max(5),
    count: z.number(),
});

export const RatingResponseSchema = z.object({
    success: z.boolean(),
    data: z.object({
        averageRating: z.number(),
        totalCount: z.number(),
        ratings: z.array(RatingItemSchema),
    }),
    error: z.null(),
});

export type RatingDto = z.infer<typeof RatingResponseSchema>;
