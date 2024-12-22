import { z } from 'zod';

import { DrugOverviewListDtoSchema } from './drug.contracts';

export type DrugOverviewList = z.infer<typeof DrugOverviewListDtoSchema>;
