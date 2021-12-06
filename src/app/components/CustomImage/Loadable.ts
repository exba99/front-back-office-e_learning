/**
 *
 * Asynchronously loads the component for CustomImage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CustomImage = lazyLoad(
  () => import('./index'),
  module => module.CustomImage,
);
