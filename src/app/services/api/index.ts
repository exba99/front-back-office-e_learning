import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rootApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:5001/',
  }),
  tagTypes: [],
  endpoints: builder => ({}),
});

// Export hooks for usage in function components
// export const {} = rootApi;
