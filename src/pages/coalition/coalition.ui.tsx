import { CreateCoalition } from '@features/coalition/create-coalition';
import { ReactElement } from 'react';

const CoalitionPage = (): ReactElement => {
    return (
        <div className="py-12">
            <div className="mx-auto w-full max-w-3xl">
                <CreateCoalition />
            </div>
        </div>
    );
};

export default CoalitionPage;
