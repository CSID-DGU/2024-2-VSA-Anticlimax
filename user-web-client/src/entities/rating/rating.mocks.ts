import { RatingDto } from './rating.contracts';

export const readDrugRatingsMock: RatingDto = {
    success: true,
    data: {
        averageRating: 4.6,
        totalCount: 128,
        ratings: [
            { rating: 5, count: 92 },
            { rating: 4, count: 28 },
            { rating: 3, count: 5 },
            { rating: 2, count: 2 },
            { rating: 1, count: 1 },
        ],
    },
    error: null,
};
