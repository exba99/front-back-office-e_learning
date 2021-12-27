import { authHeader } from 'utils/authHeader';
import { rootApi } from '..';

import { PrerequesiteApiType } from './types';

export const PrerequesiteApi = rootApi
  .enhanceEndpoints({
    addTagTypes: ['getAllPrerequesites'],
    endpoints: {
      getAllPrerequesites: {
        providesTags: ['getAllPrerequesites'],
      },
    },
  })
  .injectEndpoints({
    endpoints: builder => ({
      getAllPrerequesites: builder.query<any, Number>({
        query: (idCourse: Number) => ({
          url: `api/prerequesite/get-all/${idCourse}`,
          headers: authHeader(),
        }),
        providesTags: ['getAllPrerequesites'],
      }),
      addPrerequesite: builder.mutation({
        query: payload => ({
          url: `api/prerequesite/add`,
          method: 'POST',
          body: payload,
          headers: authHeader(),
        }),
        invalidatesTags: ['getAllPrerequesites'],
      }),
    }),
    overrideExisting: false,
  });

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useAddPrerequesiteMutation, useGetAllPrerequesitesQuery } =
  PrerequesiteApi;

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useLanguageSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
