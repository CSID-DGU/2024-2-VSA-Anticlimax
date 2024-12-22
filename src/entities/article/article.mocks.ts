import { ArticleDto, ArticleListDto } from './article.contracts';

export const readArticleListMock: ArticleListDto = {
    pageInfo: {
        totalPage: 10,
        currentPage: 1,
        totalCnt: 40,
        currentCnt: 4,
    },
    articles: [
        {
            id: 1,
            title: '칼럼의 제목이 들어갈 자리, 최대 두줄, 띄어쓰기 포함 30자 길면 끊겨요',
            content:
                '칼럼 내용을 미리볼 수 있는 곳입니다. 최대 두 줄, 띄어쓰기 포함, 38자 길면 끊겨요오오오',
            creator: '김우아한',
            createdAt: '2024-09-26',
            thumbnailUrl: 'https://i.esdrop.com/d/f/hhaNifrpr0/o8NhjBQsi4.png',
        },
        {
            id: 2,
            title: '칼럼의 제목이 들어갈 자리, 최대 두줄, 띄어쓰기 포함 30자 길면 끊겨요',
            content:
                '칼럼 내용을 미리볼 수 있는 곳입니다. 최대 두 줄, 띄어쓰기 포함, 38자 길면 끊겨요오오오',
            creator: '김우아한',
            createdAt: '2024-09-26',
            thumbnailUrl: 'https://i.esdrop.com/d/f/hhaNifrpr0/o8NhjBQsi4.png',
        },
        {
            id: 3,
            title: '칼럼의 제목이 들어갈 자리, 최대 두줄, 띄어쓰기 포함 30자 길면 끊겨요',
            content:
                '칼럼 내용을 미리볼 수 있는 곳입니다. 최대 두 줄, 띄어쓰기 포함, 38자 길면 끊겨요오오오',
            creator: '김우아한',
            createdAt: '2024-09-26',
            thumbnailUrl: 'https://i.esdrop.com/d/f/hhaNifrpr0/o8NhjBQsi4.png',
        },
        {
            id: 4,
            title: '칼럼의 제목이 들어갈 자리, 최대 두줄, 띄어쓰기 포함 30자 길면 끊겨요',
            content:
                '칼럼 내용을 미리볼 수 있는 곳입니다. 최대 두 줄, 띄어쓰기 포함, 38자 길면 끊겨요오오오',
            creator: '김우아한',
            createdAt: '2024-09-26',
            thumbnailUrl: 'https://i.esdrop.com/d/f/hhaNifrpr0/o8NhjBQsi4.png',
        },
    ],
};

export const readArticleMock: ArticleDto = {
    id: 1,
    title: '칼럼의 제목이 들어갈 자리, 최대 두줄, 띄어쓰기 포함 30자 길면 끊겨요',
    creator: '김우아한',
    createdAt: '2024-09-26',
    content:
        '안녕하세요 우아한의 후입니다.\n\n여러분은 "황"이라는 성분을 떠울리면 가장 먼저 무엇이 생각나시나요??\n\n![](https://kr.object.ncloudstorage.com/prod/articles/8/content-images/996d81c5-3b45-4f0e-9558-d71e3e305fef.png)\n\n아마도 달걀을 삶을 때 나는 유황냄새, 혹은 마늘과 양파에서 풍기는 강한 향이 생각날 겁니다. \n\n이렇듯 황이라는 원소는 일상생활에서 어디서든 찾아볼 수 있습니다. 그러나 이 황이 단순히 향만 남기는 것이 아니라, 우리 몸에 중요한 역할을 한다면 어떨까요?? \n\n바로 오늘 소개해 드릴 주인공 “MSM”입니다.\n\n## MSM이란 무엇인가?\n\nMSM이라는 이름은 어쩐지 실험실에서나 나올 법한 화학 물질처럼 들립니다. \n\n이 단어는 **Methylsulfonylmethane**의 약자로, ‘메틸’과 ‘설포닐’이라는 화학적 그룹을 포함하고 있습니다. 그렇지만, MSM은 생각보다 우리 주변에서 쉽게 찾아볼 수 있는 물질입니다. 자연에서 자라는 식물, 일부 해산물, 그리고 우리가 먹는 우유나 육류에도 미량 존재하죠. 또한, 우리의 신체 내에서도 자연적으로 생성되는 물질이기도 합니다.\n\n특히 MSM은 황을 함유한 유기 화합물이라는 점에서 주목받습니다. 황은 신체에 필수적인 원소로, 주로 단백질과 효소의 구성 요소로 작용합니다. 우리 몸의 조직과 장기를 건강하게 유지하는 데 꼭 필요한 물질이죠. \n\n![](https://kr.object.ncloudstorage.com/-prod/articles/8/content-images/ba5bf9e9-c2aa-40c4-a793-4ea02d5b5142.png)\n\nMSM이 건강 보조제로 각광받게 된 이유도 바로 이 황 성분 덕분입니다. 황이 충분히 공급되지 않으면 근육과 관절이 약해지고, 피부가 건조해지는 등 다양한 문제가 발생할 수 있습니다. 그렇기 때문에 현대인들에게 부족할 수 있는 황을 보충하기 위해 MSM이 사용됩니다.\n\n하지만, MSM이 건강 보조제로 널리 알려지게 된 것은 그리 오래된 일이 아닙니다. 한때 MSM은 산업에서 주로 사용되던 물질로, 플라스틱 제조나 화학 약품에 이용됐습니다. 하지만, 연구가 진행되면서 MSM이 사람의 건강에도 큰 도움을 줄 수 있다는 사실이 밝혀졌습니다. 특히 노화와 염증을 억제하고, 관절 통증을 줄이는 데 탁월한 효과가 있다는 연구 결과들이 나오면서부터 MSM은 사람들의 관심을 끌기 시작했습니다. \n\n![](https://kr.object.ncloudstorage.com/-prod/articles/8/content-images/275b43cb-bea9-4bcf-b3e0-e8000100a9e6.png)\n\n이제는 건강 보조제로서, 심지어 피부와 모발을 위한 미용 제품에까지 활용되고 있습니다. 이렇게 MSM의 정의와 그 기초적인 효능을 살펴보았습니다. 다음으로는 MSM이 제공하는 구체적인 효능과 그 작용에 대한 메커니즘, 어떠한 건강기능식품을 섭취해야 하는지 알아보겠습니다.\n\n### [결론]\n1. **MSM의 정의**: MSM(메틸설포닐메테인)은 자연에서 발견되는 황 함유 유기 화합물로, 건강 보조제로 널리 사용됩니다.\n2. **주요 효능**: MSM은 관절 건강을 돕고, 피부와 모발 건강을 개선하며, 염증을 완화하고 항산화 작용을 통해 세포 보호에 기여합니다.\n3. **자연적 공급원**: MSM은 마늘, 양파, 브로콜리 등에서 소량 발견되지만, 효과적인 섭취를 위해 보충제로 이용하는 경우가 많습니다. \n4. **현대인의 삶의 질 향상**: MSM은 신체적 불편함을 줄이고 미용에도 도움을 주어, 삶의 질을 높이는 데 유용한 성분입니다.\n\n### 참고문헌\n1. Barrager, E., Veltmann, J. R., Schauss, A. G., & Schiller, R. N. (2002). A multicentered, open-label trial on the safety and efficacy of methylsulfonylmethane in the treatment of seasonal allergic rhinitis. The Journal of Alternative and Complementary Medicine, 8(2), 167-173.\n2. Usha, P. R., & Naidu, M. U. R. (2004). Randomised, double-blind, parallel, placebo-controlled study of oral glucosamine, methylsulfonylmethane and their combination in osteoarthritis. Clinical Drug Investigation, 24, 353-363.\n3. Parcell, S. (2002). Sulfur in human nutrition and applications in medicine. Alternative Medicine Review, 7(1), 22-44.\n4. Kim, L. S., Axelrod, L. J., Howard, P., Buratovich, N., & Waters, R. F. (2006). Efficacy of methylsulfonylmethane (MSM) in osteoarthritis pain of the knee: A pilot clinical trial. Osteoarthritis and Cartilage, 14(3), 286-294.',
};
