import { authHeader } from 'utils/authHeader';
import { rootApi } from '../';

import { CategoryManagementApiType } from './types';

export const CategoryManagementApi = rootApi
  .enhanceEndpoints({
    addTagTypes: ['getAllCategories'],
    endpoints: {
      getAllCategories: {
        providesTags: ['getAllCategories'],
      },
    },
  })
  .injectEndpoints({
    endpoints: builder => ({
      getAllCategories: builder.query<any, void>({
        query: () => ({
          url: `api/category/get-all`,
          headers: authHeader(),
        }),
        providesTags: ['getAllCategories'],
      }),
      updateCategory: builder.mutation({
        query: payload => ({
          url: `api/category/update`,
          method: 'PUT',
          body: payload,
          headers: authHeader(),
        }),
        invalidatesTags: ['getAllCategories'],
      }),
      addCategory: builder.mutation({
        query: payload => ({
          url: `api/category/add`,
          method: 'POST',
          body: payload,
          headers: authHeader(),
        }),
        invalidatesTags: ['getAllCategories'],
      }),
      deleteCategory: builder.mutation({
        query: (idCategories: Number) => ({
          url: `api/category/delete/${idCategories}`,
          method: 'DELETE',
          headers: authHeader(),
        }),
        invalidatesTags: ['getAllCategories'],
      }),
    }),
    overrideExisting: false,
  });

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
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
