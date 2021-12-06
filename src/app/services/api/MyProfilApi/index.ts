import { rootApi } from '../';

import { UpdateInterfaceUser, UpdatePasswordInterface } from './types';
import { InfoUser } from 'app/pages/DashboardPage/slice/types';
import { authHeader } from 'utils/authHeader';

export const MyProfilApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    updateBasicInfo: builder.mutation<InfoUser, UpdateInterfaceUser>({
      query: (payload: UpdateInterfaceUser) => ({
        url: `api/user/update-basic-info`,
        method: 'PUT',
        body: payload,
        headers: authHeader(),
      }),
    }),
    updatePassword: builder.mutation<InfoUser, UpdatePasswordInterface>({
      query: (payload: UpdatePasswordInterface) => ({
        url: `api/user/update-password`,
        method: 'PUT',
        body: payload,
        headers: authHeader(),
      }),
    }),
  }),
  overrideExisting: false,
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useUpdateBasicInfoMutation, useUpdatePasswordMutation } =
  MyProfilApi;

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useMyProfilSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
