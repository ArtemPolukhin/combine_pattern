import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jphApi = createApi({
  reducerPath: 'jphApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getSession: builder.query({
      query: (number) => `users/${number}/`
    })
  })
})

export const {
  useGetSessionQuery,

} = jphApi