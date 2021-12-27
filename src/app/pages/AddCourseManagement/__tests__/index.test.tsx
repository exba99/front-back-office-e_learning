import * as React from 'react';
import { render } from '@testing-library/react';

import { AddCourseManagement } from '..';

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

describe('<AddCourseManagement  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<AddCourseManagement />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
