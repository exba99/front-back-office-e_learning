/**
 *
 * Asynchronously loads the component for CourseManagement
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CourseManagement = lazyLoad(
  () => import('./index'),
  module => module.CourseManagement,
);
