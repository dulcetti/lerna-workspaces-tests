import { render, screen } from '@testing-library/react';

import Price from '.';

test('render Price', () => {
  render(<Price value="199,90" />);

  const price = screen.getByText(/199/i);
  const priceCents = screen.getByText(/90/i);

  expect(price).toBeInTheDocument();
  expect(priceCents).toBeInTheDocument();
});
