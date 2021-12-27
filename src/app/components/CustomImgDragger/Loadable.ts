/**
 *
 * Asynchronously loads the component for CustomImgDragger
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CustomImgDragger = lazyLoad(
  () => import('./index'),
  module => module.CustomImgDragger,
);
