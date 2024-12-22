import { CONSTANTS } from '@app/constants';
import { Article } from '@entities/article';
import { TranslatedText } from '@shared/components/translated-text/translated-text.ui';
import { DateUtil } from '@shared/lib/date';
import { useRouter } from 'next/navigation';
import { ReactElement } from 'react';

interface IArticleItemProps {
    article: Article;
}

const ArticleItem = (props: IArticleItemProps): ReactElement => {
    const router = useRouter();

    const handleArticleClick = () => {
        router.push(`/article/${props.article.id}`);
    };

    return (
        <div
            className="flex cursor-pointer flex-row gap-5 overflow-hidden rounded-2xl bg-white sm:w-full md:w-full md:p-5 xl:w-3/5"
            onClick={handleArticleClick}
        >
            <div className="flex w-full max-w-[calc(100%-174px)] flex-col justify-between">
                <div className="flex w-full flex-col gap-2">
                    <h3 className="mb-1 line-clamp-2 text-start text-h3 text-neutral-800">
                        <TranslatedText text={props.article.title} />
                    </h3>
                    <div className="min-w-0">
                        <p className="line-clamp-4 w-full break-words text-start text-sub2 text-neutral-500">
                            <TranslatedText text={props.article.content} />
                        </p>
                    </div>
                </div>
                <div className="mt-5 flex flex-row gap-2">
                    <p className="text-start text-sub3 text-neutral-400">
                        {props.article.creator}
                    </p>
                    <p className="text-start text-sub3 text-neutral-400">
                        {DateUtil.convertDateStringToDottedString(
                            props.article.createdAt,
                        )}
                    </p>
                </div>
            </div>
            <div className="shrink-0">
                <img
                    src={
                        props.article.thumbnailUrl ??
                        CONSTANTS.DEFAULT_THUMBNAIL_URL
                    }
                    alt={props.article.title}
                    className="rounded-xl object-cover sm:size-20 md:size-32 xl:size-36"
                />
            </div>
        </div>
    );
};

export default ArticleItem;
