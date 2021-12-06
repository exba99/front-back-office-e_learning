import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.dashboardSlice || initialState;

export const selectDashboardSlice = createSelector(
  [selectSlice],
  state => state,
);

export const selectInfoUser = createSelector(
  [selectSlice],
  state => state.infoUser,
);
