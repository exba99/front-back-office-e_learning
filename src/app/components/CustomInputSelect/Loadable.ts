/**
 *
 * Asynchronously loads the component for CustomInputSelect
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CustomInputSelect = lazyLoad(
  () => import('./index'),
  module => module.CustomInputSelect,
);
