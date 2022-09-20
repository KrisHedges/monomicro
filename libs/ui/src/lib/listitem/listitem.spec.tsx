import { render } from '@testing-library/react';

import Listitem from './listitem';

describe('Listitem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Listitem />);
    expect(baseElement).toBeTruthy();
  });
});
