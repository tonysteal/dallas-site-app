import { render, screen } from '@testing-library/react';
import { Navigation } from '../navigation';

describe('Navigation', () => {
  test('renders navigation links', () => {
    render(<Navigation />);
    
    expect(screen.getByText('Dallas Site App')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Gallery')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('has correct navigation structure', () => {
    render(<Navigation />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('navbar');
    
    const brand = screen.getByText('Dallas Site App');
    expect(brand).toHaveClass('navbar-brand');
  });
});