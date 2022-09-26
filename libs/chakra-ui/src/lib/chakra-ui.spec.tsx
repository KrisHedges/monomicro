import { render } from '@testing-library/react';

import ChakraUi from './chakra-ui';

describe('ChakraUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChakraUi />);
    expect(baseElement).toBeTruthy();
  });
});
