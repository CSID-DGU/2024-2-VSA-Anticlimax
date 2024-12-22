'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { SearchDrug } from '@features/drug/search-drug';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Banner1, Banner2 } from 'public/images';
import { ReactElement } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { TranslatedText } from '@/shared/components/translated-text/translated-text.ui';

const HomePage = (): ReactElement => {
    const router = useRouter();
    const options = [
        {
            value: 'VITAMIN',
            label: <TranslatedText text="영양제" />,
        },
        {
            value: 'MEDICINE',
            label: <TranslatedText text="의약품" />,
        },
    ];

    const handleSearch = (searchTerm: string, option: string) => {
        router.push(`/drug?search=${searchTerm}&type=${option}`);
    };

    return (
        <div className="mx-auto mb-10 w-2/3">
            {/* Swiper Section */}
            <div className="mx-auto my-10">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    pagination={{
                        clickable: true,
                        bulletActiveClass:
                            'swiper-pagination-bullet-active !bg-primary-500',
                    }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    className="aspect-[640/400] max-w-2xl rounded-2xl"
                >
                    <SwiperSlide className="h-full">
                        <Image
                            src={Banner1}
                            alt="Banner 1"
                            className="size-full object-cover"
                            width={640}
                            height={400}
                        />
                    </SwiperSlide>
                    <SwiperSlide className="h-full">
                        <Image
                            src={Banner2}
                            alt="Banner 2"
                            className="size-full object-cover"
                            width={640}
                            height={400}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Search Section */}
            <div className="mx-auto max-w-2xl rounded-3xl bg-white py-6">
                <h2 className="mt-2 text-center text-h2">
                    <TranslatedText text="우아한에서 쉽게 약을 찾아봐요!" />
                </h2>
                <SearchDrug options={options} onSearch={handleSearch} />
            </div>
            {/* <div className="mx-auto my-10 max-w-2xl rounded-3xl bg-white p-6">
                <h2 className="mb-4 text-center text-h2">
                    우아한이 추천하는 영양제, 최저가 사러가기
                </h2>
                <div className="mb-8 flex justify-center space-x-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`rounded-2xl px-4 py-1 text-sub1 transition-colors ${
                                selectedCategory === category
                                    ? 'bg-neutral-700 text-white'
                                    : 'bg-neutral-50 text-neutral-500'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="grid mobile:grid-cols-2 xl:grid-cols-3 xxl:place-items-center">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="w-32 rounded-2xl bg-white p-4"
                        >
                            <div className="mb-2 size-32 rounded-2xl border border-solid border-neutral-200 bg-neutral-50"></div>
                            <div className="text-center">
                                <p className="mb-1 line-clamp-2 text-h4 text-neutral-800">
                                    쿠팡 상품 명 길어진 경우 2줄 최대 입니다 더
                                    길어진다면 이렇게 됩니다...
                                </p>
                                <p className=" text-h5 text-neutral-500">
                                    ₩90,000
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default HomePage;
