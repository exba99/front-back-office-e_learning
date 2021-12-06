import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { DashboardSliceState, InfoUser } from './types';

export const initialState: DashboardSliceState = {
  infoUser: null,
};

const slice = createSlice({
  name: 'dashboardSlice',
  initialState,
  reducers: {
    getInfoUser(state, action: PayloadAction<InfoUser>) {
      state.infoUser = action.payload;
      console.log('action.payload', action.payload);
    },
  },
});

export const { actions: dashboardSliceActions } = slice;

export const useDashboardSliceSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useDashboardSliceSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
