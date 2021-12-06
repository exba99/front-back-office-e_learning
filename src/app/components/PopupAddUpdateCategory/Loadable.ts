/**
 *
 * Asynchronously loads the component for PopupAddUpdateCategory
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PopupAddUpdateCategory = lazyLoad(
  () => import('./index'),
  module => module.PopupAddUpdateCategory,
);
