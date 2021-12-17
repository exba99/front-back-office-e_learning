import { authHeader } from 'utils/authHeader';
import { rootApi } from '../';

import { LanguageApiType } from './types';

export const LanguageApi = rootApi
  .enhanceEndpoints({
    addTagTypes: ['getAllLanguages'],
    endpoints: {
      getAllLanguages: {
        providesTags: ['getAllLanguages'],
      },
    },
  })
  .injectEndpoints({
    endpoints: builder => ({
      getAllLanguages: builder.query<any, void>({
        query: () => ({
          url: `api/language/get-all`,
          headers: authHeader(),
        }),
        providesTags: ['getAllLanguages'],
      }),
      updateLanguage: builder.mutation({
        query: payload => ({
          url: `api/language/update`,
          method: 'PUT',
          body: payload,
          headers: authHeader(),
        }),
        invalidatesTags: ['getAllLanguages'],
      }),
      addLanguage: builder.mutation({
        query: payload => ({
          url: `api/language/add`,
          method: 'POST',
          body: payload,
          headers: authHeader(),
        }),
        invalidatesTags: ['getAllLanguages'],
      }),
      deleteLanguage: builder.mutation({
        query: (idLevel: Number) => ({
          url: `api/language/delete/${idLevel}`,
          method: 'DELETE',
          headers: authHeader(),
        }),
        invalidatesTags: ['getAllLanguages'],
      }),
    }),
    overrideExisting: false,
  });

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useAddLanguageMutation,
  useDeleteLanguageMutation,
  useGetAllLanguagesQuery,
  useUpdateLanguageMutation,
} = LanguageApi;

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
