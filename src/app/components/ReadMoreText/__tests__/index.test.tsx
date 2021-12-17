import * as React from 'react';
import { render } from '@testing-library/react';

import { ReadMoreText } from '..';

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

describe('<ReadMoreText  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ReadMoreText />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
