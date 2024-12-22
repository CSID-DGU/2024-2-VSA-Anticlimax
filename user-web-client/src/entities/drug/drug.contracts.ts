import { z } from 'zod';

const PageInfoDto = z.object({
    totalPage: z.number(),
    currentPage: z.number(),
    totalCnt: z.number(),
    currentCnt: z.number(),
});

export const DrugOverviewDtoSchema = z.object({
    id: z.number(),
    type: z.enum(['VITAMIN', 'ETC_MEDICINE', 'OTC_MEDICINE']),
    imageUrl: z.string().nullable(),
    classificationOrManufacturer: z.string(),
    name: z.string(),
    categories: z.array(z.string()),
});

export const DrugSummaryDtoSchema = z.object({
    id: z.number(),
    imageUrl: z.string().nullable(),
    type: z.enum(['VITAMIN', 'ETC_MEDICINE', 'OTC_MEDICINE']),
    classificationOrManufacturer: z.string(),
    name: z.string(),
});

export const DrugOverviewListDtoSchema = z.object({
    pageInfo: PageInfoDto,
    drugs: z.array(DrugOverviewDtoSchema),
});

export const MedicineDetailDtoSchema = z.object({
    effect: z.string(),
    dosage: z.string(),
    precaution: z.string(),
});

export const VitaminDetailDtoSchema = z.object({
    effect: z.string(),
    dosage: z.string(),
    precaution: z.string(),
    categories: z.array(z.string()),
    expirationDate: z.string(),
    storageMethod: z.string(),
});

export type DrugOverviewListDto = z.infer<typeof DrugOverviewListDtoSchema>;
export type DrugOverview = z.infer<typeof DrugOverviewDtoSchema>;

export type DrugSummaryDto = z.infer<typeof DrugSummaryDtoSchema>;

export type MedicineDetailDto = z.infer<typeof MedicineDetailDtoSchema>;
export type VitaminDetailDto = z.infer<typeof VitaminDetailDtoSchema>;
