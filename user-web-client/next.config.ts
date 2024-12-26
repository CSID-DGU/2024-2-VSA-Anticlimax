import { NextConfig } from 'next';
import { Configuration } from 'webpack';

type ResourceQuery = { not?: (string | RegExp)[] };

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'kr.object.ncloudstorage.com',
            },
        ],
    },
    webpack(config: Configuration) {
        const fileLoaderRule = config.module?.rules?.find((rule) => {
            return (
                rule &&
                typeof rule !== 'string' &&
                rule.test instanceof RegExp &&
                rule.test.test('.svg')
            );
        });

        if (fileLoaderRule && typeof fileLoaderRule !== 'string') {
            config.module?.rules?.push(
                {
                    ...fileLoaderRule,
                    test: /\.svg$/i,
                    resourceQuery: /url/,
                },
                {
                    test: /\.svg$/i,
                    issuer: fileLoaderRule.issuer,
                    resourceQuery: {
                        not: [
                            ...((fileLoaderRule.resourceQuery as ResourceQuery)
                                ?.not || []),
                            /url/,
                        ],
                    },
                    use: ['@svgr/webpack'],
                },
            );

            fileLoaderRule.exclude = /\.svg$/i;
        }

        return config;
    },
};

export default nextConfig;
