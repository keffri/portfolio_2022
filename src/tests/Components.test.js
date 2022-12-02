import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../App';
import Home from '../components/Home';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
  });
});

describe('Home', () => {
  it('checks if email is shown', () => {
    render(<Home />);

    screen.getByText('keffri.w.neal@gmail.com');

    expect(screen.getByText('keffri.w.neal@gmail.com')).toBeInTheDocument();
  });
});
