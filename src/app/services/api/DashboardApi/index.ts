import { authHeader } from 'utils/authHeader';
import { rootApi } from '../';

import {
  InfoUser,
  UpdateInterfaceUser,
  UpdatePasswordInterface,
} from './types';

export const DashboardApi = rootApi
  .enhanceEndpoints({
    addTagTypes: ['loadInfoUser'],
    endpoints: {
      loadInfoUser: {
        providesTags: ['loadInfoUser'],
      },
    },
  })
  .injectEndpoints({
    endpoints: builder => ({
      loadInfoUser: builder.query<any, void>({
        query: () => ({
          url: 'api/authentication/user-info',
          method: 'GET',
          headers: authHeader(),
        }),
        providesTags: ['loadInfoUser'],
      }),
      updateBasicInfo: builder.mutation<InfoUser, UpdateInterfaceUser>({
        query: (payload: UpdateInterfaceUser) => ({
          url: `api/user/update-owner-basic-info`,
          method: 'PUT',
          body: payload,
          headers: authHeader(),
        }),
        invalidatesTags: ['loadInfoUser'],
      }),
      updatePassword: builder.mutation<InfoUser, UpdatePasswordInterface>({
        query: (payload: UpdatePasswordInterface) => ({
          url: `api/user/update-owner-password`,
          method: 'PUT',
          body: payload,
          headers: authHeader(),
        }),
        invalidatesTags: ['loadInfoUser'],
      }),
    }),
  });

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useLoadInfoUserQuery,
  useUpdateBasicInfoMutation,
  useUpdatePasswordMutation,
} = DashboardApi;

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useDashboardSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
