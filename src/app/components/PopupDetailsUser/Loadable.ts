/**
 *
 * Asynchronously loads the component for PopupDetailsUser
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PopupDetailsUser = lazyLoad(
  () => import('./index'),
  module => module.PopupDetailsUser,
);
