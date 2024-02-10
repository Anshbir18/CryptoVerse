// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders={
    'X-RapidAPI-Key': 'd827f5d5a2msh17d1f4edb75918dp1f80cdjsn1c94044d1830',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl='https://coinranking1.p.rapidapi.com';




// const createRequest=(url)=>({
//     url,
//     headers:cryptoApiHeaders,
// })
const createRequest = (url) => ({
    url,
    headers: cryptoApiHeaders,
  });

// Define a service using a base URL and expected endpoints
// export const cryptoApi = createApi({
//     reducerPath: 'cryptoApi', // Redux Toolkit requires this which tells that is this query for
//     baseQuery:fetchBaseQuery({baseUrl}), // This is needed and tells that what is the base query to fetch from
//     endpoints: (builder)=>({
//         getCryptos : builder.query({
//             query:()=>{
//                 createRequest('/coins') // here we need to use /exchanges with headers so we made a function createRequst to combine them
//             }
//         })
//     })
// });
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`),
      }),
    }),
  });

export const{useGetCryptosQuery}=cryptoApi;