/**
 *
 * Asynchronously loads the component for CustomInputText
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CustomInputSummernote = lazyLoad(
  () => import('./index'),
  module => module.CustomInputSummernote,
);
