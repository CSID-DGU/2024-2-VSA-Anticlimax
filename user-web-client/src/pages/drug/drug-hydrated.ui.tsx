'use client';

import { DehydratedState, HydrationBoundary } from '@tanstack/react-query';

import { DrugContent } from './drug.ui';

interface HydratedDrugContentProps {
    dehydratedState: DehydratedState;
}

export function HydratedDrugContent({
    dehydratedState,
}: HydratedDrugContentProps) {
    return (
        <HydrationBoundary state={dehydratedState}>
            <DrugContent />
        </HydrationBoundary>
    );
}
