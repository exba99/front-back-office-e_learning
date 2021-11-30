import * as React from 'react';
import { render } from '@testing-library/react';

import { CustomButtonValidate } from '..';

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

describe('<CustomButtonValidate  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<CustomButtonValidate />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
