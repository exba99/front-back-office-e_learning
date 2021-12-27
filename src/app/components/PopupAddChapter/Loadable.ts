/**
 *
 * Asynchronously loads the component for PopupAddChapter
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PopupAddChapter = lazyLoad(
  () => import('./index'),
  module => module.PopupAddChapter,
);
