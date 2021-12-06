/**
 *
 * Asynchronously loads the component for PopupAddUpdateLanguage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PopupAddUpdateLanguage = lazyLoad(
  () => import('./index'),
  module => module.PopupAddUpdateLanguage,
);
