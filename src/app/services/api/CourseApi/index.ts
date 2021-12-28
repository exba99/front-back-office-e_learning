import { idText } from 'typescript';
import { authHeader } from 'utils/authHeader';
import { rootApi } from '../';

export const CourseApi = rootApi
  .enhanceEndpoints({
    addTagTypes: ['getAllContentCourse', 'getAllCourse'],
    endpoints: {
      getAllContentCourse: {
        providesTags: ['getAllContentCourse'],
      },
    },
  })
  .injectEndpoints({
    endpoints: builder => ({
      getAllCourse: builder.query<any, void>({
        query: () => ({
          url: `api/course/get-all`,
          headers: authHeader(),
        }),
        providesTags: ['getAllCourse'],
      }),
      getCourseById: builder.query<any, Number>({
        query: id => ({
          url: `api/course/get/${id}`,
          headers: authHeader(),
        }),
      }),
      getAllContentCourse: builder.query<any, Number>({
        query: id => ({
          url: `api/course/get-all-content/${id}`,
          headers: authHeader(),
        }),
        providesTags: ['getAllContentCourse'],
      }),
      addBasicInfoCourse: builder.mutation({
        query: payload => ({
          url: `api/course/add-basic-info`,
          method: 'POST',
          body: payload,
          headers: authHeader(),
        }),
      }),
      addPartCourse: builder.mutation({
        query: payload => ({
          url: `api/course/add-part-course`,
          method: 'POST',
          body: payload,
          headers: authHeader(),
        }),
        invalidatesTags: ['getAllContentCourse'],
      }),
      addChapter: builder.mutation({
        query: payload => ({
          url: `api/course/add-chapter-course`,
          method: 'POST',
          body: payload,
          headers: authHeader(),
        }),
        invalidatesTags: ['getAllContentCourse'],
      }),
      publishCourse: builder.mutation<any, Number>({
        query: (id: Number) => ({
          url: `api/course/publish/${id}`,
          method: 'GET',
          headers: authHeader(),
        }),
        invalidatesTags: ['getAllCourse'],
      }),
    }),
    overrideExisting: false,
  });

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllCourseQuery,
  useAddBasicInfoCourseMutation,
  useGetCourseByIdQuery,
  useAddPartCourseMutation,
  useAddChapterMutation,
  useGetAllContentCourseQuery,
  usePublishCourseMutation,
} = CourseApi;

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useCourseSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
