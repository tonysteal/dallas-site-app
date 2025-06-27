import { render, screen } from '@testing-library/react';
import { Services } from '../services';

const mockData = [
  {
    icon: 'fa fa-wordpress',
    name: 'Web Development',
    text: 'Service description here'
  },
  {
    icon: 'fa fa-cart-arrow-down',
    name: 'E-commerce',
    text: 'Another service description'
  }
];

describe('Services', () => {
  test('renders services list', () => {
    render(<Services data={mockData} />);
    
    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText('E-commerce')).toBeInTheDocument();
    expect(screen.getByText('Service description here')).toBeInTheDocument();
  });

  test('renders section heading', () => {
    render(<Services data={mockData} />);
    expect(screen.getByText('Our Services')).toBeInTheDocument();
  });
});