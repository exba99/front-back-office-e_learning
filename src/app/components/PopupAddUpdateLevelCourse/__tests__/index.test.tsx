import * as React from 'react';
import { render } from '@testing-library/react';

import { PopupAddUpdateLevelCourse } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<PopupAddUpdateLevelCourse  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<PopupAddUpdateLevelCourse />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
