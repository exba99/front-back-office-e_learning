import { authHeader } from 'utils/authHeader';
import { rootApi } from '../';

import { LanguageApiType } from './types';

export const LanguageApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    getAllLanguages: builder.mutation({
      query: () => ({
        url: `api/language/get-all`,
        headers: authHeader(),
      }),
    }),
    updateLanguage: builder.mutation({
      query: payload => ({
        url: `api/language/update`,
        method: 'PUT',
        body: payload,
        headers: authHeader(),
      }),
    }),
    addLanguage: builder.mutation({
      query: payload => ({
        url: `api/language/add`,
        method: 'POST',
        body: payload,
        headers: authHeader(),
      }),
    }),
    deleteLanguage: builder.mutation({
      query: (idLevel: Number) => ({
        url: `api/language/delete/${idLevel}`,
        method: 'DELETE',
        headers: authHeader(),
      }),
    }),
  }),
  overrideExisting: false,
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useAddLanguageMutation,
  useDeleteLanguageMutation,
  useGetAllLanguagesMutation,
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
