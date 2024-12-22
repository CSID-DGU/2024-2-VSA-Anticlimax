import { AxiosContracts, AxiosResponseType } from '@shared/lib/axios';
import httpClient from '@shared/lib/axios/axios.lib';
import { z } from 'zod';

import { CreateCoalitionDto } from './coalition.contracts';

export class CoalitionService {
    static createCoalitionMutation(data: CreateCoalitionDto) {
        return httpClient
            .post<AxiosResponseType<null>>('/api/v1/coalitions', {
                name: data.contactName,
                cell_phone_number: data.contactInfo,
                email: data.email,
                content: data.inquiryContent,
            })
            .then(AxiosContracts.responseContract(z.null()));
    }
}
