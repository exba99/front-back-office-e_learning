import * as React from 'react';
import { render } from '@testing-library/react';

import { CategoryManagement } from '..';

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

describe('<CategoryManagement  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<CategoryManagement />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
