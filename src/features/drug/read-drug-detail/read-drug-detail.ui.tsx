import { DrugQueries } from '@entities/drug';
import { VitaminDetailDto } from '@entities/drug';
import { TranslatedText } from '@shared/components/translated-text/translated-text.ui';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';

const ReadDrugDetail = ({
    drugId,
    type,
}: {
    drugId: string;
    type: 'VITAMIN' | 'ETC_MEDICINE' | 'OTC_MEDICINE';
}) => {
    const { data: detail } = useSuspenseQuery({
        queryKey:
            type === 'VITAMIN'
                ? DrugQueries.keys.vitaminDetail(drugId)
                : DrugQueries.keys.medicineDetail(drugId),
        queryFn:
            type === 'VITAMIN'
                ? DrugQueries.drugVitaminDetailQuery(drugId)
                : DrugQueries.drugMedicineDetailQuery(drugId),
    });

    if (!detail) return null;

    const sections =
        type === 'VITAMIN'
            ? [
                  {
                      title: <TranslatedText text="이 약은요" />,
                      content: detail.effect,
                  },
                  {
                      title: <TranslatedText text="유통기한" />,
                      content: (detail as VitaminDetailDto).expirationDate,
                  },
                  {
                      title: <TranslatedText text="보관 방법" />,
                      content: (detail as VitaminDetailDto).storageMethod,
                  },
                  {
                      title: <TranslatedText text="복용 방법" />,
                      content: detail.dosage,
                  },
                  {
                      title: <TranslatedText text="이 점을 유의하세요" />,
                      content: detail.precaution,
                  },
              ]
            : [
                  {
                      title: <TranslatedText text="이런 효과를 가져요" />,
                      content: detail.effect,
                  },
                  {
                      title: <TranslatedText text="이렇게 복용하세요" />,
                      content: detail.dosage,
                  },
                  {
                      title: <TranslatedText text="이 점을 유의하세요" />,
                      content: detail.precaution,
                  },
              ];

    return (
        <div className="mt-16 flex w-full flex-col gap-4">
            <h2 className="mb-4 text-left text-h2 text-neutral-900">
                <TranslatedText text="약 정보" />
            </h2>
            {sections.map((section, index) => {
                if (
                    type === 'VITAMIN' &&
                    section.title === <TranslatedText text="유통기한" /> &&
                    (detail as VitaminDetailDto).categories
                ) {
                    return (
                        <Fragment key={`section-${index}`}>
                            <div
                                key="categories-section"
                                className="w-full rounded-3xl bg-white px-5 py-4"
                            >
                                <h2 className="mb-3 text-left text-h3 text-neutral-900">
                                    <TranslatedText text="주요 기능" />
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {(
                                        detail as VitaminDetailDto
                                    ).categories.map(
                                        (category: string, idx: number) => (
                                            <span
                                                key={`category-${idx}-${category}`}
                                                className="rounded-full bg-primary-50 px-3 py-1 text-sub1 text-primary-500"
                                            >
                                                {category}
                                            </span>
                                        ),
                                    )}
                                </div>
                            </div>
                            <div
                                key={`section-${section.title}-${index}`}
                                className="w-full rounded-3xl bg-white px-5 py-4"
                            >
                                <h2 className="mb-3 text-left text-h3 text-neutral-900">
                                    {section.title}
                                </h2>
                                <div className="text-h5 text-neutral-800">
                                    <ReactMarkdown
                                        components={{
                                            h1: ({ children }) => (
                                                <h1 className="text-left text-h2 text-neutral-900">
                                                    <TranslatedText
                                                        text={children}
                                                    />
                                                </h1>
                                            ),
                                            h2: ({ children }) => (
                                                <h2 className="text-left text-h3 text-neutral-900">
                                                    <TranslatedText
                                                        text={children}
                                                    />
                                                </h2>
                                            ),
                                            h3: ({ children }) => (
                                                <h3 className="text-left text-h4 text-neutral-900">
                                                    <TranslatedText
                                                        text={children}
                                                    />
                                                </h3>
                                            ),
                                            h4: ({ children }) => (
                                                <h4 className="text-left text-h5 text-neutral-900">
                                                    <TranslatedText
                                                        text={children}
                                                    />
                                                </h4>
                                            ),
                                            h5: ({ children }) => (
                                                <h5 className="text-left text-h6 text-neutral-900">
                                                    <TranslatedText
                                                        text={children}
                                                    />
                                                </h5>
                                            ),

                                            p: ({ children }) => (
                                                <p className="text-left text-neutral-800">
                                                    <TranslatedText
                                                        text={children}
                                                    />
                                                </p>
                                            ),
                                            ul: ({ children }) => (
                                                <ul className="list-none pl-0 text-neutral-800">
                                                    <TranslatedText
                                                        text={children}
                                                    />
                                                </ul>
                                            ),
                                            li: ({ children }) => (
                                                <li className="text-left text-neutral-800">
                                                    <TranslatedText
                                                        text=<TranslatedText
                                                            text={children}
                                                        />
                                                    />
                                                </li>
                                            ),
                                        }}
                                    >
                                        {section.content || ''}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        </Fragment>
                    );
                }

                return (
                    <div
                        key={`section-${section.title}-${index}`}
                        className="w-full rounded-3xl bg-white px-5 py-4"
                    >
                        <h2 className="mb-3 text-left text-h3 text-neutral-900">
                            {section.title}
                        </h2>
                        <div className="text-h5 text-neutral-800">
                            <ReactMarkdown
                                components={{
                                    h1: ({ children }) => (
                                        <h1 className="text-left text-h2 text-neutral-900">
                                            <TranslatedText text={children} />
                                        </h1>
                                    ),
                                    h2: ({ children }) => (
                                        <h2 className="text-left text-h3 text-neutral-900">
                                            <TranslatedText text={children} />
                                        </h2>
                                    ),
                                    h3: ({ children }) => (
                                        <h3 className="text-left text-h4 text-neutral-900">
                                            <TranslatedText text={children} />
                                        </h3>
                                    ),
                                    h4: ({ children }) => (
                                        <h4 className="text-left text-h5 text-neutral-900">
                                            <TranslatedText text={children} />
                                        </h4>
                                    ),
                                    h5: ({ children }) => (
                                        <h5 className="text-left text-h6 text-neutral-900">
                                            <TranslatedText text={children} />
                                        </h5>
                                    ),

                                    p: ({ children }) => (
                                        <p className="text-left text-neutral-800">
                                            <TranslatedText text={children} />
                                        </p>
                                    ),
                                    ul: ({ children }) => (
                                        <ul className="list-none pl-0 text-neutral-800">
                                            <TranslatedText text={children} />
                                        </ul>
                                    ),
                                    li: ({ children }) => (
                                        <li className="text-left text-neutral-800">
                                            <TranslatedText text={children} />
                                        </li>
                                    ),
                                }}
                            >
                                {section.content || ''}
                            </ReactMarkdown>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ReadDrugDetail;
