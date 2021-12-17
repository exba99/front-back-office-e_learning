import * as React from 'react';
import { render } from '@testing-library/react';

import { CustomDataTable } from '..';

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

describe('<CustomDataTable  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <CustomDataTable columns={[]} data={undefined} />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
