import * as React from 'react';
import { render } from '@testing-library/react';

import { ItemMenu } from '..';

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

describe('<ItemMenu  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ItemMenu />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
