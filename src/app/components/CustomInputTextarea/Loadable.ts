/**
 *
 * Asynchronously loads the component for CustomInputText
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CustomInputTextarea = lazyLoad(
  () => import('./index'),
  module => module.CustomInputTextarea,
);
