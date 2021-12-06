/**
 *
 * Asynchronously loads the component for LevelCourseManagement
 *
 */

import { lazyLoad } from 'utils/loadable';

export const LevelCourseManagement = lazyLoad(
  () => import('./index'),
  module => module.LevelCourseManagement,
);
