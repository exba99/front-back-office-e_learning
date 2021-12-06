import { authHeader } from 'utils/authHeader';
import { rootApi } from '../';

import { DashboardApiType } from './types';

export const DashboardApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    loadInfoUser: builder.mutation({
      query: () => ({
        url: 'api/authentication/user-info',
        method: 'GET',
        headers: authHeader(),
      }),
    }),
  }),
  overrideExisting: false,
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useLoadInfoUserMutation } = DashboardApi;

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
