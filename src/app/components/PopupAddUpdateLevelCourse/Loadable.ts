/**
*
* Asynchronously loads the component for PopupAddUpdateLevelCourse
*
*/

import { lazyLoad } from 'utils/loadable';

export const PopupAddUpdateLevelCourse = lazyLoad(() => import('./index'), module => module.PopupAddUpdateLevelCourse);