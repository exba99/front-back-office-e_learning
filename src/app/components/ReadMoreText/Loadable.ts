/**
 *
 * Asynchronously loads the component for ReadMoreText
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ReadMoreText = lazyLoad(
  () => import('./index'),
  module => module.ReadMoreText,
);
