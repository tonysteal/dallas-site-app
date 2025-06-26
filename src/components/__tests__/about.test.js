import { render, screen } from '@testing-library/react';
import { About } from '../about';

const mockData = {
  paragraph: 'About us paragraph content',
  Why: ['Reason 1', 'Reason 2'],
  Why2: ['Another reason 1', 'Another reason 2']
};

describe('About', () => {
  test('renders about content', () => {
    render(<About data={mockData} />);
    
    expect(screen.getByText('About us paragraph content')).toBeInTheDocument();
    expect(screen.getByText('Reason 1')).toBeInTheDocument();
    expect(screen.getByText('Another reason 1')).toBeInTheDocument();
  });

  test('renders section heading', () => {
    render(<About data={mockData} />);
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });
});