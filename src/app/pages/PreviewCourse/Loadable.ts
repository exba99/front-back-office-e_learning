/**
 *
 * Asynchronously loads the component for PreviewCourse
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PreviewCourse = lazyLoad(
  () => import('./index'),
  module => module.PreviewCourse,
);
