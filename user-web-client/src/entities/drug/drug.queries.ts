import { DrugService } from './drug.service';

export class DrugQueries {
    static readonly keys = {
        list: ['drug', 'list'] as const,
        detail: (id: number) => ['drug', 'detail', id] as const,
        summary: (id: string) => ['drug', 'summary', id] as const,
        medicineDetail: (id: string) =>
            ['drug', 'medicine', 'detail', id] as const,
        vitaminDetail: (id: string) =>
            ['drug', 'vitamin', 'detail', id] as const,
    };
    static drugOverviewListQuery(
        type: 'VITAMIN' | 'MEDICINE',
        searchTerm?: string,
        page?: number,
        size?: number,
    ) {
        return async () => {
            const response = await DrugService.readDrugOverviewListQuery({
                drugType: type,
                searchTerm,
                page,
                size,
            });
            return response.data;
        };
    }

    static drugSummaryQuery(drugId: string) {
        return async () => {
            const response = await DrugService.readDrugSummaryQuery(drugId);
            return response.data;
        };
    }

    static drugMedicineDetailQuery(drugId: string) {
        return async () => {
            const response = await DrugService.readMedicineDetailQuery(drugId);
            return response.data;
        };
    }

    static drugVitaminDetailQuery(drugId: string) {
        return async () => {
            const response = await DrugService.readVitaminDetailQuery(drugId);
            return response.data;
        };
    }
}
