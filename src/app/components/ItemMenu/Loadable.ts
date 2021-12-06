/**
 *
 * Asynchronously loads the component for ItemMenu
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ItemMenu = lazyLoad(
  () => import('./index'),
  module => module.ItemMenu,
);
