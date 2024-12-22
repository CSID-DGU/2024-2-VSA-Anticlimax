import { ReactElement } from 'react';

const ArticleItemSkeleton = (): ReactElement => {
    return (
        <div className="flex w-3/5 flex-col rounded-2xl bg-white p-5">
            <div className="flex w-full flex-row gap-5">
                <div className="flex flex-col">
                    <div className="mb-1 h-7 w-96 animate-pulse rounded-lg bg-neutral-200" />
                    <div className="h-5 w-80 animate-pulse rounded-lg bg-neutral-200" />
                    <div className="mt-5 flex flex-row gap-2">
                        <div className="h-4 w-16 animate-pulse rounded-lg bg-neutral-200" />
                        <div className="h-4 w-20 animate-pulse rounded-lg bg-neutral-200" />
                    </div>
                </div>
                <div className="shrink-0">
                    <div className="size-32 animate-pulse rounded-lg bg-neutral-200" />
                </div>
            </div>
        </div>
    );
};

export default ArticleItemSkeleton;
