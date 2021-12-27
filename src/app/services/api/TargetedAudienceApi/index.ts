import { authHeader } from 'utils/authHeader';
import { rootApi } from '..';

import { TargetedAudienceApiType } from './types';

export const TargetedAudienceApi = rootApi
  .enhanceEndpoints({
    addTagTypes: ['getAllTargetedAudiences'],
    endpoints: {
      getAllTargetedAudiences: {
        providesTags: ['getAllTargetedAudiences'],
      },
    },
  })
  .injectEndpoints({
    endpoints: builder => ({
      getAllTargetedAudiences: builder.query<any, Number>({
        query: (idCourse: Number) => ({
          url: `api/targeted_audience/get-all/${idCourse}`,
          headers: authHeader(),
        }),
        providesTags: ['getAllTargetedAudiences'],
      }),
      addTargetedAudience: builder.mutation({
        query: payload => ({
          url: `api/targeted_audience/add`,
          method: 'POST',
          body: payload,
          headers: authHeader(),
        }),
        invalidatesTags: ['getAllTargetedAudiences'],
      }),
    }),
    overrideExisting: false,
  });

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useAddTargetedAudienceMutation,
  useGetAllTargetedAudiencesQuery,
} = TargetedAudienceApi;

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
