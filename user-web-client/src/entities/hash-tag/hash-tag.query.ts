import { queryOptions } from '@tanstack/react-query';

import { HashTagService } from './hash-tag.service';

export class HashTagQuery {
    static readonly keys = {
        list: ['hash-tag', 'list'] as const,
    };

    static readHashTagListQuery() {
        return queryOptions({
            queryKey: [...this.keys.list],
            queryFn: async () => {
                const response = await HashTagService.readHashTagList();

                return response.data;
            },
        });
    }
}
