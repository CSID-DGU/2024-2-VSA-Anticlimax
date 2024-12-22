import { z } from 'zod';

const ReviewItemSchema = z.object({
    id: z.number(),
    writer: z.string(),
    content: z.string(),
    rating: z.number().min(1).max(5),
    createdAt: z.string(),
});

export const ReviewResponseSchema = z.object({
    success: z.boolean(),
    data: z.array(ReviewItemSchema),
    error: z.null(),
});

export type ReviewResponse = z.infer<typeof ReviewResponseSchema>;

export interface ReviewDto {
    id: number;
    writer: string;
    content: string;
    rating: number;
    createdAt: string;
}
