import * as React from 'react';
import { render } from '@testing-library/react';

import { AddUserManagement } from '..';

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

describe('<AddUserManagement  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<AddUserManagement />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
