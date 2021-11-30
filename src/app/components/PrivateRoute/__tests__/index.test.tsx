import * as React from 'react';
import { render } from '@testing-library/react';

import { PrivateRoute } from '..';

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

describe('<PrivateRoute  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<PrivateRoute />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
