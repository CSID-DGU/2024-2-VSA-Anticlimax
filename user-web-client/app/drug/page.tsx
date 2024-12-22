import { DrugQueries } from '@entities/drug/drug.queries';
import { HydratedDrugContent } from '@pages/drug/drug-hydrated.ui';
import { queryClient } from '@shared/lib/react-query';
import { dehydrate } from '@tanstack/react-query';

export default async function DrugPage() {
    await queryClient.prefetchInfiniteQuery({
        queryKey: ['drugs', 'VITAMIN', ''],
        queryFn: async ({ pageParam = 1 }) => {
            return DrugQueries.drugOverviewListQuery(
                'VITAMIN',
                '',
                pageParam,
                30,
            )();
        },
        initialPageParam: 1,
    });

    const dehydratedState = dehydrate(queryClient);

    return <HydratedDrugContent dehydratedState={dehydratedState} />;
}
