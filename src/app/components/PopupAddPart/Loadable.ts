/**
 *
 * Asynchronously loads the component for PopupAddPart
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PopupAddPart = lazyLoad(
  () => import('./index'),
  module => module.PopupAddPart,
);
