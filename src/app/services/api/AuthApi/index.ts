import { authHeader } from 'utils/authHeader';
import { rootApi } from '../';

import { AuthApiType, LoginModel } from './types';

export const AuthApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: (data: LoginModel) => ({
        url: 'api/authentication/login',
        method: 'POST',
        body: data,
      }),
    }),
  }),
  overrideExisting: false,
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation } = AuthApi;

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useAuthSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
