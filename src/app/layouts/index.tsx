import '../styles';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import QueryClientProvider from '@/app/provider/query-client-provider';
import { LanguageProvider } from '@/shared/contexts/LanguageContext';
import { Footer } from '@/widgets/layouts/footer';
import { Navbar } from '@/widgets/layouts/navbar';

const pretendardRegular = localFont({
    src: '../../../public/fonts/Pretendard-Regular.woff',
    variable: '--font-pretendard-regular',
    weight: '700',
});

export const metadata: Metadata = {
    title: '우아한 | 영양제, 칼럼, 전문 의약품 정보',
    description: '약을 쉽고 편하게 알아봐요, 우아한',
    icons: {
        icon: '/favicon.svg',
    },
    openGraph: {
        title: '우아한 | 전문 의약품, 영양제, 칼럼 정보',
        siteName: '우아한',
        description: '약을 쉽고 편하게 알아봐요, 우아한',
        type: 'website',
        url: 'https://wooahan.com',
        images: ['images/og_image.png'],
        locale: 'ko_KR',
    },
};

export function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body
                className={`${pretendardRegular.variable} mx-auto flex w-full flex-col items-center bg-neutral-50 text-center antialiased`}
            >
                <QueryClientProvider>
                    <LanguageProvider>
                        <Navbar />
                        <div className="mx-auto mt-20 w-full">{children}</div>
                        <Footer />
                    </LanguageProvider>
                </QueryClientProvider>
            </body>
        </html>
    );
}
