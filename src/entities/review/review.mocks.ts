import { ReviewResponse } from './review.contracts';

export const readDrugReviewsMock: ReviewResponse = {
    success: true,
    data: [
        {
            id: 1,
            writer: '김우아한',
            content: '효과가 정말 좋아요!',
            rating: 5,
            createdAt: '2024-03-15',
        },
        {
            id: 2,
            writer: '윤우아한',
            content: '매일 복용중입니다',
            rating: 4,
            createdAt: '2024-03-14',
        },
        {
            id: 3,
            writer: '손우아한',
            content: '좋아요!',
            rating: 3,
            createdAt: '2024-03-13',
        },
        {
            id: 4,
            writer: '서우아한',
            content: '좋아요!',
            rating: 3,
            createdAt: '2024-03-13',
        },
        {
            id: 5,
            writer: '구우아한',
            content: '좋아요!',
            rating: 5,
            createdAt: '2024-03-13',
        },
        {
            id: 6,
            writer: '이우아한',
            content: '좋아요!',
            rating: 5,
            createdAt: '2024-03-13',
        },
    ],
    error: null,
};
