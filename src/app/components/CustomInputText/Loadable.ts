/**
 *
 * Asynchronously loads the component for CustomInputText
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CustomInputText = lazyLoad(
  () => import('./index'),
  module => module.CustomInputText,
);
