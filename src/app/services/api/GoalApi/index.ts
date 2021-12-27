import NumberPrompt from 'inquirer/lib/prompts/number';
import { authHeader } from 'utils/authHeader';
import { rootApi } from '..';

import { GoalApiType } from './types';

export const GoalApi = rootApi
  .enhanceEndpoints({
    addTagTypes: ['getAllGoals'],
    endpoints: {
      getAllGoals: {
        providesTags: ['getAllGoals'],
      },
    },
  })
  .injectEndpoints({
    endpoints: builder => ({
      getAllGoals: builder.query<any, Number>({
        query: (idCourse: Number) => ({
          url: `api/goal/get-all/${idCourse}`,
          headers: authHeader(),
        }),
        providesTags: ['getAllGoals'],
      }),
      addGoal: builder.mutation({
        query: payload => ({
          url: `api/goal/add`,
          method: 'POST',
          body: payload,
          headers: authHeader(),
        }),
        invalidatesTags: ['getAllGoals'],
      }),
    }),
    overrideExisting: false,
  });

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useAddGoalMutation, useGetAllGoalsQuery } = GoalApi;

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
