import { render, screen } from '@testing-library/react';
import { Features } from '../features';

const mockData = [
  {
    icon: 'fa fa-comments-o',
    title: 'Food/Drink',
    text: 'Test feature description'
  },
  {
    icon: 'fa fa-bullhorn',
    title: 'Fitness',
    text: 'Another test description'
  }
];

describe('Features', () => {
  test('renders features list', () => {
    render(<Features data={mockData} />);
    
    expect(screen.getByText('Food/Drink')).toBeInTheDocument();
    expect(screen.getByText('Fitness')).toBeInTheDocument();
    expect(screen.getByText('Test feature description')).toBeInTheDocument();
  });

  test('renders without data', () => {
    render(<Features />);
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});