import { useMutation } from '@tanstack/react-query';

import { CreateCoalitionDto } from './coalition.contracts';
import { CoalitionService } from './coalition.service';

export const useCreateCoalition = () => {
    return useMutation({
        mutationFn: (data: CreateCoalitionDto) =>
            CoalitionService.createCoalitionMutation(data),
    });
};
