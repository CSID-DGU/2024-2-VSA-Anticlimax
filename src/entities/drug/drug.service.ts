import { AxiosContracts, AxiosResponseType } from '@shared/lib/axios';
import httpClient from '@shared/lib/axios/axios.lib';

import {
    DrugOverviewListDto,
    DrugOverviewListDtoSchema,
    DrugSummaryDto,
    DrugSummaryDtoSchema,
    MedicineDetailDto,
    MedicineDetailDtoSchema,
    VitaminDetailDto,
    VitaminDetailDtoSchema,
} from './drug.contracts';

export class DrugService {
    static readDrugOverviewListQuery({
        searchTerm,
        drugType = 'MEDICINE',
        page = 1,
        size = 10,
    }: {
        searchTerm?: string;
        drugType: 'VITAMIN' | 'MEDICINE';
        page?: number;
        size?: number;
    }) {
        const params = new URLSearchParams();

        if (searchTerm && searchTerm.length >= 2) {
            params.append('searchTerm', searchTerm);
        }
        params.append('drugType', drugType);
        params.append('page', page.toString());
        params.append('size', size.toString());

        return httpClient
            .get<
                AxiosResponseType<DrugOverviewListDto>
            >(`/api/v1/drugs/overviews?${params.toString()}`)
            .then(AxiosContracts.responseContract(DrugOverviewListDtoSchema));
    }

    static readDrugSummaryQuery(drugId: string) {
        return httpClient
            .get<
                AxiosResponseType<DrugSummaryDto>
            >(`/api/v1/drugs/${drugId}/summaries`)
            .then(AxiosContracts.responseContract(DrugSummaryDtoSchema));
    }

    static readMedicineDetailQuery(drugId: string) {
        return httpClient
            .get<
                AxiosResponseType<MedicineDetailDto>
            >(`/api/v1/medicines/${drugId}`)
            .then(AxiosContracts.responseContract(MedicineDetailDtoSchema));
    }

    static readVitaminDetailQuery(drugId: string) {
        return httpClient
            .get<
                AxiosResponseType<VitaminDetailDto>
            >(`/api/v1/vitamins/${drugId}`)
            .then(AxiosContracts.responseContract(VitaminDetailDtoSchema));
    }
}
