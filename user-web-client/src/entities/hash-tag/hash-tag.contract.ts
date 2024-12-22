import { z } from 'zod';

const hashTagDto = z.object({
    id: z.number().optional(),
    name: z.string(),
});

export const hashTagListDtoSchema = z.object({
    hashTags: z.array(hashTagDto),
});

export type HashTagListDto = z.infer<typeof hashTagListDtoSchema>;
