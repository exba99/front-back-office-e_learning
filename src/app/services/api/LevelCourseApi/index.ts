import { authHeader } from 'utils/authHeader';
import { rootApi } from '../';

import { LevelCourseApiType } from './types';

export const LevelCourseApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    getAllLevelCourses: builder.mutation({
      query: () => ({
        url: `api/level-course/get-all`,
        headers: authHeader(),
      }),
    }),
    updateLevelCourse: builder.mutation({
      query: payload => ({
        url: `api/level-course/update`,
        method: 'PUT',
        body: payload,
        headers: authHeader(),
      }),
    }),
    addLevelCourse: builder.mutation({
      query: payload => ({
        url: `api/level-course/add`,
        method: 'POST',
        body: payload,
        headers: authHeader(),
      }),
    }),
    deleteLevelCourse: builder.mutation({
      query: (idLevel: Number) => ({
        url: `api/level-course/delete/${idLevel}`,
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
  useAddLevelCourseMutation,
  useDeleteLevelCourseMutation,
  useGetAllLevelCoursesMutation,
  useUpdateLevelCourseMutation,
} = LevelCourseApi;

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useLevelCourseSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
