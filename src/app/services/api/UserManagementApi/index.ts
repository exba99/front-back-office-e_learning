import { authHeader } from 'utils/authHeader';
import { rootApi } from '../';
import { InfoUser, InfoUserPost } from '../DashboardApi/types';

export const UserManagementApi = rootApi
  .enhanceEndpoints({
    addTagTypes: ['getAllUsers'],
    endpoints: {
      getAllUsers: {
        providesTags: ['getAllUsers'],
      },
    },
  })
  .injectEndpoints({
    endpoints: builder => ({
      getAllUsers: builder.query<Array<InfoUser>, void>({
        query: () => ({
          url: `api/user/get-all`,
          headers: authHeader(),
        }),
        providesTags: ['getAllUsers'],
      }),
      getAllRoles: builder.query<Array<any>, void>({
        query: () => ({
          url: `api/user/get-all-roles`,
          headers: authHeader(),
        }),
      }),
      getUser: builder.query<InfoUser, string>({
        query: (id: string) => ({
          url: `api/user/get/${id}`,
          headers: authHeader(),
        }),
      }),
      addUser: builder.mutation<InfoUserPost, any>({
        query: (payload: InfoUser) => ({
          url: `api/user/add`,
          method: 'POST',
          body: payload,
          headers: authHeader(),
        }),
        invalidatesTags: ['getAllUsers'],
      }),
      updateUser: builder.mutation<any, InfoUser>({
        query: (payload: InfoUser) => ({
          url: `api/user/update`,
          method: 'PUT',
          body: payload,
          headers: authHeader(),
        }),
        invalidatesTags: ['getAllUsers'],
      }),
      blockUser: builder.mutation<any, Number>({
        query: (idUser: Number) => ({
          url: `api/user/block/${idUser}`,
          method: 'GET',
          headers: authHeader(),
        }),
        invalidatesTags: ['getAllUsers'],
      }),
      unBlockUser: builder.mutation<any, Number>({
        query: (idUser: Number) => ({
          url: `api/user/unblock/${idUser}`,
          method: 'GET',
          headers: authHeader(),
        }),
        invalidatesTags: ['getAllUsers'],
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
  useGetAllRolesQuery,
  useAddUserMutation,
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
