/**
 *
 * Asynchronously loads the component for AddUserManagement
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AddUserManagement = lazyLoad(
  () => import('./index'),
  module => module.AddUserManagement,
);
