/**
 *
 * Asynchronously loads the component for MyProfilPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const MyProfilPage = lazyLoad(
  () => import('./index'),
  module => module.MyProfilPage,
);
