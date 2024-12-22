'use client';

import { queryClient } from '@shared/lib/react-query';
import {
    Query,
    QueryClientProvider as TanStackQueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AxiosError } from 'axios';
import { ReactNode } from 'react';

type TQueryClientProviderProps = {
    children: ReactNode;
};

export function QueryClientProvider(props: TQueryClientProviderProps) {
    const { children } = props;

    return (
        <TanStackQueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools
                initialIsOpen={false}
                buttonPosition="bottom-left"
                errorTypes={[
                    {
                        name: 'Error',
                        initializer: errorInitializer(new Error('Error')),
                    },
                    {
                        name: 'AxiosError',
                        initializer: errorInitializer(
                            new AxiosError('AxiosError'),
                        ),
                    },
                ]}
            />
        </TanStackQueryClientProvider>
    );
}

function errorInitializer(error: Error) {
    return (query: Query) => {
        query.reset();
        return error;
    };
}

export default QueryClientProvider;
