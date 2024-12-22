import { z } from 'zod';

import { hashTagListDtoSchema } from './hash-tag.contract';

export type HashTagList = z.infer<typeof hashTagListDtoSchema>;
