import { ReactElement } from 'react';

export const ReadDrugRatingSkeleton = (): ReactElement => {
    return (
        <div>
            <div className="mb-5 w-full rounded-3xl bg-white px-8 py-5">
                <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
                    <div className="flex flex-col items-center gap-3">
                        <div className="h-9 w-20 animate-pulse rounded-md bg-neutral-100" />
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className="size-8 animate-pulse rounded-md bg-neutral-100"
                                />
                            ))}
                        </div>
                        <div className="h-6 w-16 animate-pulse rounded-md bg-neutral-100" />
                    </div>
                    <div className="mt-4 flex w-full max-w-sm flex-1 flex-col gap-4 lg:mt-0">
                        {[5, 4, 3, 2, 1].map((i) => (
                            <div
                                key={i}
                                className="flex w-full items-center gap-4"
                            >
                                <div className="h-6 w-12 shrink-0 animate-pulse rounded-md bg-neutral-100" />
                                <div className="h-3 w-full animate-pulse rounded-full bg-neutral-100" />
                                <div className="h-6 w-12 shrink-0 animate-pulse rounded-md bg-neutral-100" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
