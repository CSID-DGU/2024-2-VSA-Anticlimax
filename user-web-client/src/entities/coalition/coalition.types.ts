import { z } from 'zod';

import { CreateCoalitionDtoSchema } from './coalition.contracts';

export type CreateCoalition = z.infer<typeof CreateCoalitionDtoSchema>;
