import { authHeader } from 'utils/authHeader';
import { rootApi } from '../';
import { InfoUser } from '../DashboardApi/types';

export const UserManagementApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    getAllUsers: builder.query<Array<InfoUser>, void>({
      query: () => ({
        url: `api/user/get-all`,
        headers: authHeader(),
      }),
    }),
    getUser: builder.query<InfoUser, string>({
      query: (id: string) => ({
        url: `api/user/get/${id}`,
        headers: authHeader(),
      }),
    }),
    updateUser: builder.mutation<any, InfoUser>({
      query: (payload: InfoUser) => ({
        url: `api/user/update`,
        method: 'PUT',
        body: payload,
        headers: authHeader(),
      }),
    }),
    blockUser: builder.mutation<any, Number>({
      query: (idUser: Number) => ({
        url: `api/user/block/${idUser}`,
        method: 'GET',
        headers: authHeader(),
      }),
    }),
    unBlockUser: builder.mutation<any, Number>({
      query: (idUser: Number) => ({
        url: `api/user/unblock/${idUser}`,
        method: 'GET',
        headers: authHeader(),
      }),
    }),
  }),
  overrideExisting: false,
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useBlockUserMutation,
  useGetAllUsersQuery,
  useUnBlockUserMutation,
  useUpdateUserMutation,
  useGetUserQuery,
} = UserManagementApi;

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useUserManagementSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
