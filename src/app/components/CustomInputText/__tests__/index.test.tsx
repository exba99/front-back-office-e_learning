import * as React from 'react';
import { render } from '@testing-library/react';

import { CustomInputText } from '..';

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

describe('<CustomInputText  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<CustomInputText />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
