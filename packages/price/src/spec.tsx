import { render, screen } from '@testing-library/react';

import Price from '.';

describe('<Price />', () => {
  test('should be rendered the component', () => {
    render(<Price value="199,90" />);

    const price = screen.getByText(/199/i);
    const priceCents = screen.getByText(/90/i);
    expect(price).toBeInTheDocument();
    expect(priceCents).toBeInTheDocument();
  });

  test('should be verified if the value is greater than 1000', () => {
    render(<Price value="1599,90" />);

    const price = screen.getByText(/1.599/i);
    expect(price).toBeInTheDocument();
  });
});
