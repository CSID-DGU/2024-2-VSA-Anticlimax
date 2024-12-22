import { AxiosContracts, AxiosResponseType } from '@shared/lib/axios';
import httpClient from '@shared/lib/axios/axios.lib';

import { HashTagListDto, hashTagListDtoSchema } from './hash-tag.contract';

export class HashTagService {
    static readHashTagList() {
        return httpClient
            .get<AxiosResponseType<HashTagListDto>>(`/api/v1/hash-tags`)
            .then(AxiosContracts.responseContract(hashTagListDtoSchema));
    }
}
