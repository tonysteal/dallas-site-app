import { render, screen } from '@testing-library/react';
import { Header } from '../header';

const mockData = {
  title: 'Welcome to Dallas',
  paragraph: 'Test paragraph content'
};

describe('Header', () => {
  test('renders header content', () => {
    render(<Header data={mockData} />);
    
    expect(screen.getByText('Welcome to Dallas')).toBeInTheDocument();
    expect(screen.getByText('Test paragraph content')).toBeInTheDocument();
  });

  test('renders without data', () => {
    render(<Header />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });
});