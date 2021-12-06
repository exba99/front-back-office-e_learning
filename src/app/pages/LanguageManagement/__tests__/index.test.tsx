import * as React from 'react';
import { render } from '@testing-library/react';

import { LanguageManagement } from '..';

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

describe('<LanguageManagement  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<LanguageManagement />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
