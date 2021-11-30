/**
 *
 * Asynchronously loads the component for CustomButtonValidate
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CustomButtonValidate = lazyLoad(
  () => import('./index'),
  module => module.CustomButtonValidate,
);
