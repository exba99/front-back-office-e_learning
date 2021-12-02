import { authHeader } from 'utils/authHeader';
import history from 'utils/history';
import { rootApi } from '../';

import { AuthApiType, LoginModel } from './types';

export const AuthApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    getInfoUser: builder.query({
      query: () => ({
        url: 'api/authentication/info-user',
        method: 'GET',
        headers: authHeader(),
      }),
    }),
    login: builder.mutation({
      query: (data: LoginModel) => ({
        url: 'api/authentication/login',
        method: 'POST',
        body: data,
      }),
      onQueryStarted: async (arg: any, { dispatch, queryFulfilled }: any) => {
        await queryFulfilled
          .then((loginData: any) => {
            localStorage.setItem('token', loginData.data.token);
            history.push('/home');
          })
          .catch(err => {
            return err;
          });
      },
    }),
  }),
  overrideExisting: false,
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetInfoUserQuery, useLoginMutation } = AuthApi;

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
