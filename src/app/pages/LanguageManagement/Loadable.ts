/**
 *
 * Asynchronously loads the component for LanguageManagement
 *
 */

import { lazyLoad } from 'utils/loadable';

export const LanguageManagement = lazyLoad(
  () => import('./index'),
  module => module.LanguageManagement,
);
