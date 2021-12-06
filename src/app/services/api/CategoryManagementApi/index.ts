import { authHeader } from 'utils/authHeader';
import { rootApi } from '../';

import { CategoryManagementApiType } from './types';

export const CategoryManagementApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    getAllCategories: builder.mutation({
      query: () => ({
        url: `api/category/get-all`,
        headers: authHeader(),
      }),
    }),
    updateCategory: builder.mutation({
      query: payload => ({
        url: `api/category/update`,
        method: 'PUT',
        body: payload,
        headers: authHeader(),
      }),
    }),
    addCategory: builder.mutation({
      query: payload => ({
        url: `api/category/add`,
        method: 'POST',
        body: payload,
        headers: authHeader(),
      }),
    }),
    deleteCategory: builder.mutation({
      query: (idCategories: Number) => ({
        url: `api/category/delete/${idCategories}`,
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
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoriesMutation,
  useUpdateCategoryMutation,
} = CategoryManagementApi;

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useCategoryManagementSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
