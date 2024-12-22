'use client';

import { ReactElement } from 'react';

const ReadDrugItemEmpty = (): ReactElement => {
    return (
        <div className="mt-20 flex flex-col items-center justify-center">
            <p className="mt-4 text-h2 text-neutral-500">
                등록된 약품이 없습니다.
            </p>
        </div>
    );
};

export default ReadDrugItemEmpty;
