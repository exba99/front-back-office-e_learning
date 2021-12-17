/**
 *
 * Asynchronously loads the component for CustomDataTableWithOption
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CustomDataTable = lazyLoad(
  () => import('./index'),
  module => module.CustomDataTable,
);
