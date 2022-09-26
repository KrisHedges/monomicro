import { render } from '@testing-library/react';

import ChakraButton from './chakra-button';

describe('ChakraButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChakraButton />);
    expect(baseElement).toBeTruthy();
  });
});
