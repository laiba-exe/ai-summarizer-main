import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// insert API key here
const rapidApiKey = 'b870ca648cmshc224f61290ded2ap1c200fjsn197e4ea3f16c';

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => summarize?url=${encodeURIComponent(params.articleUrl)}&length=3,
        }),
    }),
});

export const { useLazyGetSummaryQuery } = articleApi;
