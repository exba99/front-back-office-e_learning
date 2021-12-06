/**
 *
 * Asynchronously loads the component for CategoryManagement
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CategoryManagement = lazyLoad(
  () => import('./index'),
  module => module.CategoryManagement,
);
