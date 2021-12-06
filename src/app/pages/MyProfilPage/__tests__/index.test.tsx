import * as React from 'react';
import { render } from '@testing-library/react';

import { MyProfilPage } from '..';

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

describe('<MyProfilPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<MyProfilPage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
