/**
 *
 * Asynchronously loads the component for AddCourseManagement
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AddCourseManagement = lazyLoad(
  () => import('./index'),
  module => module.AddCourseManagement,
);
